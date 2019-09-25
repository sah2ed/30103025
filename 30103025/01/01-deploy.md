node --version && npm --version
->v10.15.0
->6.4.1

npm i -g aws-cdk
->...
->+ aws-cdk@1.9.0
->added 236 packages from 242 contributors in 70.562s

cdk bootstrap
->internal/modules/cjs/loader.js:583
->    throw err;
->    ^
->
->Error: Cannot find module '@aws-cdk/aws-apigateway'
->    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
->    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
->    at Module.require (internal/modules/cjs/loader.js:637:17)
->    at require (internal/modules/cjs/helpers.js:22:18)
->    at Object.<anonymous> (D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\01-submission-322070\cdk\MainStack.js:5:20)
->    at Module._compile (internal/modules/cjs/loader.js:689:30)
->    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
->    at Module.load (internal/modules/cjs/loader.js:599:32)
->    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
->    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
->Subprocess exited with error 1

npm un -g @aws-cdk/aws-apigateway
npm WARN @aws-cdk/aws-apigateway@1.9.0 requires a peer of @aws-cdk/aws-certificatemanager@^1.9.0 but none is installed. You must install peer dependencies yourself.
npm WARN @aws-cdk/aws-apigateway@1.9.0 requires a peer of @aws-cdk/aws-elasticloadbalancingv2@^1.9.0 but none is installed. You must install peer dependencies yourself.

npm WARN @aws-cdk/aws-apigateway@1.9.0 requires a peer of @aws-cdk/aws-iam@^1.9.0 but none is installed. You must install peer dependencies yourself.
npm WARN @aws-cdk/aws-apigateway@1.9.0 requires a peer of @aws-cdk/aws-lambda@^1.9.0 but none is installed. You must install peer dependencies yourself.
npm WARN @aws-cdk/aws-apigateway@1.9.0 requires a peer of @aws-cdk/core@^1.9.0 but none is installed. You must install peer dependencies yourself.

+ @aws-cdk/aws-apigateway@1.9.0
added 26 packages from 4 contributors in 4.449s


npm i
->npm WARN aws-scheduler@1.0.0 No repository field.
->npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
->npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
->
->added 468 packages from 318 contributors and audited 16181 packages in 108.379s
->found 0 vulnerabilities


npm run build
->> aws-scheduler@1.0.0 build D:\Work\Review\Topcoder\Autopilot-AWS-POC\subs\git\01-submission-322070
->> webpack --progress --colors
->
->Hash: f03fe75e0740daa0773f
->Version: webpack 4.40.2
->Time: 1741ms
->Built at: 09/24/2019 12:26:18 PM
->...


cdk deploy
->schedular: deploying...
->
->   schedular failed: Error: This stack uses assets, so the toolkit stack must be deployed to the environment (Run "cdk bootstrap aws://unknown-account/unknown-region")
->
->This stack uses assets, so the toolkit stack must be deployed to the environment (Run "cdk bootstrap aws://unknown-account/unknown-region")


cdk bootstrap
->  Bootstrapping environment aws://<aws-id>/us-east-1...
->CDKToolkit: creating CloudFormation changeset...
-> 1/2 | 12:34:55 PM | CREATE_COMPLETE      | AWS::S3::Bucket | StagingBucket
-> 2/2 | 12:34:56 PM | CREATE_COMPLETE      | AWS::CloudFormation::Stack | CDKToolkit
->   Environment aws://<aws-id>/us-east-1 bootstrapped.

cdk deploy
->...
->Outputs:
->schedular.apiEndpoint9349E63C = https://41x7xqya1l.execute-api.us-east-1.amazonaws.com/prod/
->
->Stack ARN:
->arn:aws:cloudformation:us-east-1:<aws-id>:stack/schedular/8e578150-debf-11e9-a11e-0e86e2a0c174
