import dotenv from "dotenv";
dotenv.config();
import { Redis } from "ioredis";

const username = process.env.REDIS_USERNAME;
const password = process.env.REDIS_PASSWORD;

const redisURI = `redis://${username}:${password}@redis-12819.c14.us-east-1-2.ec2.cloud.redislabs.com:12819`

class RedisClient {
    constructor() {
        this.redis = new Redis(redisURI, {
            maxRetriesPerRequest: 3
        });

        this.redis.on("error", (err) => {
            console.error("Redis error:", err);
        });
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.redis.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }
    
    async set(key, value, duration) {
        return new Promise((resolve, reject) => {
            this.redis.set(key, value, "EX", duration, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }
    
    async del(key) {
        return new Promise((resolve, reject) => {
            this.redis.del(key, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }
}

const redisClient = new RedisClient();
export { redisClient };
