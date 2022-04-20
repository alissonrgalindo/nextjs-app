import data from './data.json';

export function getNewsById(id) {
  const News = data.filter((product) => product.id === id);
  return News;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const News = getNewsById(req.query.id);
    res.status(200).json(News);
  }
}