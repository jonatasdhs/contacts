/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Log user
 *   - name: Contacts
 *     description: Users contacts
 */
 
/**
 * @swagger
 * 
 *  /contacts:
 *   post:
 *     tags:
 *       - Contacts
 *     summary: Create user contact
 *     description: This can only be done by the logged in user.
 *     operationId: Create user contact
 *     requestBody:
 *       description: Created user object
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *         application/xml:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Contacts'
 *     responses:
 *       default:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *     security:
 *         - BearerAuth:
 *             type: http
 *             scheme: bearer  
 */

/**
 * @swagger
 * 
 *  /login:
 *    post:
 *       tags:
 *          - Login
 *       summary: Logs user
 *       description: ''
 *       parameters:
 *        - name: email
 *          description: User email for login
 *          required: true
 *          schema:
 *             type: string    
 *        - name: password
 *          description: User password for login
 *          required: true
 *          schema:
 *             type: string
 *       responses:
 *        200:
 *          description: Sucessful login
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *        400:
 *          description: User not found
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */

/**
 * @swagger
 * 
 *  /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Create user
 *     description: This can only be done by the logged in user.
 *     operationId: createUser
 *     requestBody:
 *       description: Created user object
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *         application/xml:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       default:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *        example: 10
 *      email:
 *        type: string
 *        format: string
 *        example: mail@mail.com
 *      password:
 *        type: string
 *        description: users password
 *        example: password
 *      phone:
 *        type: integer
 *        format: int64
 *        example: 7981232300
 *      fullname:
 *        type: string
 *        format: string
 *        example: jose fernando
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Contacts:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *        format: int64
 *        example: 10
 *      email:
 *        type: string
 *        format: string
 *        example: mail@mail.com
 *      phone:
 *        type: integer
 *        format: int64
 *        example: 7981232300
 *      fullname:
 *        type: string
 *        format: string
 *        example: jose fernando
 */


