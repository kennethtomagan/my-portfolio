import home from './home/routes'
import skills from './skills/routes'
import projects from './projects/routes'
import hireMe from './hireMe/routes'
import experience from './experience/routes'
import notfound from './notFound/routes'

export default [...notfound, ...home, ...skills, ...projects, ...hireMe, ...experience]