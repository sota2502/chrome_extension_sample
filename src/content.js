document.querySelectorAll('a').forEach(e => {
  e.href = e.href.replace('http://', 'https://')
  e.style.backgroundColor = 'beige'
})
