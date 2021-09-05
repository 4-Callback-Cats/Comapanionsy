import { Formik } from 'formik';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { mcqQuestions, textQuestions } from './questions';
import { Sections } from './styles/Sections';

function QuestionCard() {
  const formRef = useRef();
  return (
    <Sections>
      <div className="mx-4 questionCardWrapper">
        <Formik
          initialValues={{
            username: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(values);
              }}
            >
              {mcqQuestions.map((que, index) => {
                return (
                  <Form.Group controlId={`form-${index}`} key={`form-${index}`}>
                    <Form.Label as="h3">{que.q}</Form.Label>
                    {que.options.map((option, ind) => (
                      <Form.Check
                        key={`inline-radio-${index}-${ind}`}
                        name={`inline-radio-${index}}`}
                        required
                        inline
                        onChange={handleChange}
                        label={`${option}`}
                        value={`${option}`}
                        type={'radio'}
                        id={`inline-radio-${index}-${ind}`}
                      />
                    ))}
                  </Form.Group>
                );
              })}
              {textQuestions.map((que, index) => (
                <Form.Group controlId={`form-${index}`} key={`form-${index}`}>
                  <Form.Label as="h3">{que.q}</Form.Label>
                  {que.options.map((option, ind) => (
                    <Form.Control
                      key={`textarea-${index}-${ind}`}
                      name={`textarea-${index}-${ind}`}
                      as="textarea"
                      onChange={handleChange}
                      defaultValue={option}
                      rows={3}
                      id={`textarea-${index}-${ind}`}
                    />
                  ))}
                </Form.Group>
              ))}

              <Button
                className="mx-2 my-2"
                as="input"
                type="submit"
                value="Submit"
              />
              <Button className="my-2" as="input" type="reset" value="Reset" />
            </Form>
          )}
        </Formik>
      </div>
    </Sections>
  );
}

export default QuestionCard;
