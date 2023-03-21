import { config } from '../config'
import { isEnvDevelopment } from './env'

let vConsole = {}
if (isEnvDevelopment && config.vConsole) {
  import('vconsole').then(({ default: VConsole }) => {
    vConsole = new VConsole()
  })
}

export default vConsole
