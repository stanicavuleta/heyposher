import useJwt from '@core/auth/jwt/useJwt'
import axios from '@axios'

const { jwt } = useJwt(axios, {})

jwt.jwtConfig.tokenType = ""
jwt.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3NobWFydmVsIiwiaWF0IjoxNjE0Nzc5ODg5LCJuYmYiOjE2MTQ3Nzk4ODksImp0aSI6IjVhYWEwZWExLTI0MDMtNGMxYy04ZTljLTczZjI4OWQwMjdlZCJ9.Pyeo3XvrvzttCCdF9jfIe3l6j8jjEYdmRZ4QjmwezIg")

export default jwt
