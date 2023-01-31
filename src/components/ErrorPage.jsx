import React from 'react';
import '../stylesheets/ErrorPage.css'

export default function ErrorPage(props) {
    const { errorType } = props

  if (errorType === 404) return (
      <div id="ErrorPage">
          <h1>
              404 Error
          </h1>
          <p>
              The content you are looking for could not be located.
          </p>
          <p>
              If you believe this message has been given in error,
              please contact our support team.
          </p>
      </div>
  )

  return (
    <div id="ErrorPage">
        <h1>
            Internal Server Error
        </h1>
        <p>
            Something has gone wrong with our website.
        </p>
        <p>
            We apologise for the problem.
        </p>
    </div>
)
}
