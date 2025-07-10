export function useLayout(pathName: string) {

  const routes = [
    {
      path: '/',
      name: 'about'
    },
    {
      path: '/resume',
      name: 'resume'
    },
    {
      path: '/contact',
      name: 'contact'
    },
    {
      path: '/portfolio',
      name: 'portfolio'
    },
    {
      path: '/blog',
      name: 'blog'
    }
  ]

  const title = pathName === '/' 
  ? 'About' 
  : pathName === '/resume'
  ? 'Resume'
  : pathName === '/contact'
  ? 'Contact'
  : pathName === '/portfolio'
  ? 'Portfolio'
  : 'Blog';

  return {
    title,
    routes
  }
}