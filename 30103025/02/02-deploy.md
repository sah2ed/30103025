# From the 1st terminal
set LAMBDA_ROLE=arn:aws:iam::<aws-id>:role/lambda01
set STEP_FUNCTION_ROLE=arn:aws:iam::<aws-id>:role/lambda02

serverless deploy

 Serverless Warning --------------------------------------

  A valid environment variable to satisfy the declaration 'env:AWS_REGION' could not be found.


 Serverless Warning --------------------------------------

  A valid environment variable to satisfy the declaration 'env:TABLE_NAME' could not be found.


 Serverless Warning --------------------------------------

  A valid environment variable to satisfy the declaration 'env:AWS_REGION' could not be found.


 Serverless Warning --------------------------------------

  A valid environment variable to satisfy the declaration 'env:TABLE_NAME' could not be found.

Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service tc-auto-pilot.zip file to S3 (1.49 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
...........
Serverless: Stack update finished...
Service Information
service: tc-auto-pilot
stage: dev
region: us-east-1
stack: serverless-tc-auto-pilot
resources: 5
api keys:
  None
endpoints:
  None
functions:
  executeSchedulerTask: tc-auto-pilot-dev-executeSchedulerTask
layers:
  None
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.






# From the 2nd terminal
set AWS_STATE_MACHINE_ARN=arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor

npm run start

> auto-pilot-poc@1.0.0 start D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079
> node app.js

info: Express server listening on port 3000
debug: ENTER create
debug: input arguments
debug: { schedulerTask:
   { headers:
      { 'Content-Type': 'application/json',
        Accept: 'application/json' },
     verb: 'GET',
     endpoint: 'https://api.topcoder.com/v4/challenges/30102653',
     schedulerTime: '2019-09-25T11:32:24.956Z' } }
null
error: Error happened in create
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:03.983Z,
  requestId: '8e6a9a06-b3aa-48fe-9562-1f8afad72fd5',
  statusCode: 400,
  retryable: false,
  retryDelay: 90.65138566115655 }
error: StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
error: Error happened in POST /scheduler
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:03.983Z,
  requestId: '8e6a9a06-b3aa-48fe-9562-1f8afad72fd5',
  statusCode: 400,
  retryable: false,
  retryDelay: 90.65138566115655,
  logged: true }
debug: ENTER create
debug: input arguments
debug: { schedulerTask:
   { headers:
      { 'Content-Type': 'application/json',
        Accept: 'application/json' },
     verb: 'POST',
     endpoint: 'https://webhook.site/c3525b7b-0b7d-4784-b01a-fa069a53fc36',
     payload: { name: 'test' },
     schedulerTime: '2019-09-25T11:32:29.961Z' } }
null
error: Error happened in create
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:05.030Z,
  requestId: '171fcb00-3fc6-431d-9f10-da0caec57355',
  statusCode: 400,
  retryable: false,
  retryDelay: 26.295726061402448 }
error: StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
error: Error happened in POST /scheduler
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:05.030Z,
  requestId: '171fcb00-3fc6-431d-9f10-da0caec57355',
  statusCode: 400,
  retryable: false,
  retryDelay: 26.295726061402448,
  logged: true }
debug: ENTER create
debug: input arguments
debug: { schedulerTask:
   { verb: 'GET',
     endpoint: 'https://api.topcoder.com/v5/submissions',
     schedulerTime: '2019-09-25T11:32:34.961Z' } }
null
error: Error happened in create
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:06.119Z,
  requestId: '98727a08-961b-4134-a8bc-77f4b73ed3ff',
  statusCode: 400,
  retryable: false,
  retryDelay: 60.47237238194014 }
error: StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
error: Error happened in POST /scheduler
error: { StateMachineDoesNotExist: State Machine Does Not Exist: 'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor '
    at Request.extractError (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\protocol\json.js:51:27)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:106:20)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:78:10)
    at Request.emit (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:683:14)
    at Request.transition (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:22:10)
    at AcceptorStateMachine.runTo (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:14:12)
    at D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\state_machine.js:26:10
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:38:9)
    at Request.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\request.js:685:12)
    at Request.callListeners (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079\node_modules\aws-sdk\lib\sequential_executor.js:116:18)
  message:
   'State Machine Does Not Exist: \'arn:aws:states:us-east-1:<aws-id>:stateMachine:invokeSchedulerTaskExecutor \'',
  code: 'StateMachineDoesNotExist',
  time: 2019-09-25T11:32:06.119Z,
  requestId: '98727a08-961b-4134-a8bc-77f4b73ed3ff',
  statusCode: 400,
  retryable: false,
  retryDelay: 60.47237238194014,
  logged: true }








# From the 3rd terminal
npm run test

> auto-pilot-poc@1.0.0 test D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\02-submission-322079
> node test/test.js

Response Status: 500
Response Body:
{ message: 'Internal server error' }
Response Status: 500
Response Body:
{ message: 'Internal server error' }
Response Status: 500
Response Body:
{ message: 'Internal server error' }
Done!
