/**
 * @swagger
 * /users:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [users]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 철수
 *                          email:
 *                              type: string
 *                              example: qawsed@gmail.com
 *                          personal:
 *                              type: string
 *                              example: 20100201-1111111
 *                          prefer:
 *                              type: string
 *                              example: https://google.com
 *                          pwd:
 *                              type: string
 *                              example: 12345678
 *                          pwd:
 *                              type: string
 *                              example: 01012345678
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 사용자 데이터 가져오기
 *     tags: [Users]
 *     responses:
 *          200:
 *              description: 성공
 */
