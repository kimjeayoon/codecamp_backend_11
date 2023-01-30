/**
 * @swagger
 * /tokens/phone:
 *  post:
 *      summary: 1. 전화번호 체크 후 인증번호를 전달하는 과정
 *      description: 전화번호 입력 후 인증번호 전달을 한다
 *      tags: [Phone&Token]
 *      requestBody:
 *                required: true
 *                content:
 *                   application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: "01012345678"
 *      responses:
 *         200:
 *             description: 입력한 번호를 확인 후 인증번호 전송을 한다
 *             content:
 *                  application/json:
 *                     schema:
 *                          type: string
 *                          example: "핸드폰으로 인증문자가 전송되었습니다"
 */
/**
 * @swagger
 * /tokens/phone:
 *  patch:
 *      summary: 2. 인증번호 확인과정
 *      description: 출력받은 인증번호를 입력해서 인증확인한다.
 *      tags: [Phone&Token]
 *      requestBody:
 *                required: true
 *                content:
 *                   application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: "01012345678"
 *                              token:
 *                                  type: string
 *                                  required: true
 *                                  example: "123456"
 *      responses:
 *         200:
 *             description: 전달받은 인증번호와 맞는확인 후에 , 처음으로 번호 입력시 false를 출력하는 과정
 *             content:
 *                   application/json:
 *                      schema:
 *                          type: string
 *                          example: "입력하신 인증번호가 확인되었습니다."
 */
/**
 * @swagger
 * /users:
 *  post:
 *      summary: 3. 개인정보입력칸
 *      description: 개인정보를 입력한다.
 *      tags: [Phone&Token]
 *      requestBody:
 *                required: true
 *                content:
 *                   application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  required: true
 *                                  example: "철수"
 *                              email:
 *                                  type: string
 *                                  required: true
 *                                  example: "qawsed@naver.com"
 *                              personal:
 *                                  type: string
 *                                  required: true
 *                                  example: "000302-*******"
 *                              prefer:
 *                                  type: string
 *                                  required: true
 *                                  example: "https://www.naver.com"
 *                              pwd:
 *                                  type: string
 *                                  required: true
 *                                  example: "qwer1234"
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: "01012345678"
 *      responses:
 *         200:
 *             description: 입력된 개인정보를 읽는다.
 *             content:
 *                  application/json:
 *                     schema:
 *                          type: string
 *                          example: "입력한 개인정보가 저장되었습니다."
 */
/**
 * @swagger
 * /users:
 *  get:
 *      summary: 4. 유저정보리스트
 *      description: 정보를 종합한다.
 *      tags: [Phone&Token]
 *      responses:
 *         200:
 *             description: 유저정보리스트
 *             content:
 *                   application/json:
 *                      schema:
 *                          type: string
 *                          example: "유저정보리스트입니다.."
 */
