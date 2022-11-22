// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type HelloResponse = {
  name: string;
};

// /api/helloで呼ばれた時のAPIの挙動を実装する。
export default (req, res) => {
  // ステータス200で{"name":"John Doe"}を返す。
  res.status(200).json({ name: 'john doe' });
};
