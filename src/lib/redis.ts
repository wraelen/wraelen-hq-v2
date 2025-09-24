import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function updateLeaderboard(userId: string, points: number) {
  await redis.zadd('leaderboard', points, userId); // Sorted set for points
}

export async function getLeaderboard(top = 10) {
  return await redis.zrevrange('leaderboard', 0, top - 1, 'WITHSCORES');
}