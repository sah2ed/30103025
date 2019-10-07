const http = require('http')
const _ = require('lodash')
const challengeApi = require('topcoder-challenge-api-wrapper')

const config = {
  CHALLENGE_API_URL: 'http://api.topcoder-dev.com/v4',
  JWT: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5VSkZORGd4UlRVME5EWTBOVVkzTlRkR05qTXlRamxETmpOQk5UYzVRVUV3UlRFeU56TTJRUSJ9.eyJpc3MiOiJodHRwczovL3RvcGNvZGVyLWRldi5hdXRoMC5jb20vIiwic3ViIjoiZTZvWkF4bm9GdmpkUnRqSnMxSnQzdHF1TG5OU1RzMGVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbTJtLnRvcGNvZGVyLWRldi5jb20vIiwiaWF0IjoxNTcwMDA3OTI2LCJleHAiOjE1NzAwOTQzMjYsImF6cCI6ImU2b1pBeG5vRnZqZFJ0akpzMUp0M3RxdUxuTlNUczBlIiwic2NvcGUiOiJhbGw6Y2hhbGxlbmdlcyByZWFkOmNoYWxsZW5nZXMgd3JpdGU6Y2hhbGxlbmdlcyByZWFkOmdyb3VwcyByZWFkOnByb2plY3QgcmVhZDpidXNfdG9waWNzIHdyaXRlOmJ1c19hcGkgcmVhZDp1c2VyX3Byb2ZpbGVzIHJlYWQ6cHJvamVjdC11c2VyIHJlYWQ6cHJvamVjdC1wZXJtaXNzaW9uIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.pKANnGHrSYWy58Q9Qh6_7v-zLr49Dvdyu1rABtEHyTKkyw33TW-u-qLJWeHzMAx-vWG0KEiqwVHDmRdfKp2VqDTTc3GeFI30-yhhy2H6jBtrH1wKFOZuh19b87aiDJXXEGulbfvZj2H5thYY1SRFNtvAaGrMo7bgb-1-SCV3HM2tokMLOaJtRXBLcug-zMrxsedsZZRwO9qVpRH2b2oqRQXMt-oMe3KebFEK9refHpIx2qSdGkpCc3IHktedgoKga79aMv-oMLx7pD194k_YujMhL-13X2eJPjdzk1QZd6l6QZuZxTg3Cf3gJP4aq0wArZAJE7rTBJE36nWLVRr5iQ'
}

const challengeApiClient = challengeApi(_.pick(config, ['CHALLENGE_API_URL']))

challengeApiClient
  .searchPlatforms(config.JWT)
  .then(result => {
    console.log("Result 1:", result.status)
    console.log(result.body)
  })
  .catch(err => console.log(err))

challengeApiClient
  .searchChallengeTypes(config.JWT)
  .then(result => {
      console.log("Result 2:")
      console.log(result.body, result.status)
  })
.catch(err => console.log(err))
