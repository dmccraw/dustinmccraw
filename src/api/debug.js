module.exports = (req, res) => {
  res.headers[`x-site-id`] = `dustins-site`
  res.headers[`x-dustin-test`] = `mccraw`
  res.status(200).send({
    host: req.host,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    headers: req.headers,
    body: req.body,
  })
}
