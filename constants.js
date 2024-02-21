import env from "dotenv";
env.config();

export const BASE_URL = "https://www.freecodecamp.org";
export const API_BASE_URL = "https://api.freecodecamp.org";
export const cookieChecker = /^[a-z]+[=].+; __stripe_mid=.+; __stripe_sid=.+; _csrf=.+; csrf_token=.+; jwt_access_token=.+\..+\..+$/
export const demoCookie = "gbuuid=9eaad644-37cd-4e65-844b-39519d6a0f8e; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IlFXUVN3VXVZcG9Ib1dqNnVOYkZQelpEZnREclpCVVh5WTFwcE9tOUVadlZiNE5vZHV3eU9TVkpqcnZlZkZyTksiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyNC0wMi0yMFQxOToyMjoxMi43ODNaIiwidXNlcklkIjoiNjVkNGZiZTRhMDY0Nzg0MzM5NzJiMjE2In0sImlhdCI6MTcwODQ1NjkzMn0.HzfIYr3QLj-7vUghyypKcCx-IKb24Q99RGPEhjZMmBQ.wMmY9142%2FdlClx2qLLJkZa3P9qYdn2uDOth7B7iHCrE; __stripe_mid=cda7bc54-5b09-4a54-a9d2-d4f6cd0c2f4c6a3d63; _csrf=ybIi2s_uU3Gv3uR0Tqy6S7MR; csrf_token=ZNliZYtZ-CBLf9MArnKrHLHYnIexcKDqxKY8; __stripe_sid=713c5098-8522-4785-af79-9652e832de2aa6a098"
export const privateKey = process.env.JWT_PRIVATE_KEY;
export const algorithm = process.env.JWT_ALGORITHM;
export const dev_pass_key = process.env.DEV_PASS_KEY
export const dev_cookie = process.env.DEV_COOKIE