import { render } from '@testing-library/react';
import { Toast } from 'bootstrap';
import { Formik } from 'formik';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../lib/auth';
import { updateProfile } from '../lib/database';
import { mcqQuestions, textQuestions } from './questions';
import { Sections } from './styles/Sections';

function QuestionCard() {
  const auth = useAuth();
  const handleUserProfileSubmit = async (values) => {
    values.uid = auth.user.uid;
    await updateProfile(auth?.user?.uid, values);
    alert('Your profile was updated successfully');
  };
  return (
    <Sections>
      <div className="mx-4 questionCardWrapper">
        <Formik
          initialValues={{
            uid: '',
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
                handleUserProfileSubmit(values);
              }}
            >
              {mcqQuestions.map((que, index) => {
                return (
                  <Form.Group controlId={que.id} key={que.id}>
                    <Form.Label as="h3">{que.q}</Form.Label>
                    {que.options.map((option, ind) => (
                      <Form.Check
                        key={`${que.id}-${ind}`}
                        name={que.id}
                        required
                        inline
                        onChange={handleChange}
                        label={`${option}`}
                        value={`${option}`}
                        type={'radio'}
                        id={que.id}
                      />
                    ))}
                  </Form.Group>
                );
              })}
              {textQuestions.map((que, index) => (
                <Form.Group controlId={que.id} key={que.id}>
                  <Form.Label as="h3">{que.q}</Form.Label>
                  {que.options.map((option, ind) => (
                    <Form.Control
                      key={`${que.id}-${ind}`}
                      name={que.id}
                      as="textarea"
                      onChange={handleChange}
                      defaultValue={option}
                      rows={3}
                      id={que.id}
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
