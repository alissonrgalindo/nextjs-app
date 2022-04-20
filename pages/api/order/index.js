export default function handler(req, res) {
    const order = req.body;
    if (!order) {
      return res.status(500).json({ msg: 'No items in the order' });
    }
    res.status(200).json(order);
  }