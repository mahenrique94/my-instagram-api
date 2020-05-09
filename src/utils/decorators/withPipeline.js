module.exports = fns => ctx => Promise.all(fns.map(async fn => await fn(ctx)))
