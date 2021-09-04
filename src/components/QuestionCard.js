import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import questions from './questions';
import { Sections } from './styles/Sections';

function QuestionCard() {
  const formRef = useRef();
  console.log(questions);
  return (
    <Sections>
      <div className="mx-4 questionCardWrapper">
        <Form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formRef);
          }}
        >
          {questions.map((que, index) => {
            return (
              <>
                <h4>{que.q}</h4>
                <Form.Group controlId={`form-${index}`}>
                  {que.options.map((option, ind) => {
                    return option ? (
                      <Form.Check
                        key={ind}
                        inline
                        label={`${option}`}
                        name="group1"
                        type={'radio'}
                        id={`inline-radio-${ind}`}
                      />
                    ) : (
                      <Form.Control
                        key={ind}
                        as="textarea"
                        defaultValue={option}
                        rows={3}
                        id={`textarea-${ind}`}
                      />
                    );
                  })}
                </Form.Group>
              </>
            );
          })}
          <Button as="input" type="submit" value="Submit" />
          <Button as="input" type="reset" value="Reset" />
        </Form>
      </div>
    </Sections>
  );
}

export default QuestionCard;
