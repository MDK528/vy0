import { defaultBuildLogger, Template } from 'e2b'
import { template as nextJSTemplate} from './template'
import 'dotenv/config'

Template.build(nextJSTemplate, "vy0", {
  cpuCount: 4,
  memoryMB: 4096,
  onBuildLogs: defaultBuildLogger(),
  apiKey: "e2b_4dd3429e32b8bc729a556a96d8cfc4d8560ad4e6"
})