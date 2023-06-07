import path from "path"
import { fileURLToPath } from "url"
import shelljs from "shelljs"
import { program } from "commander"
import packageJson from "../package.json"

const currentVersion = packageJson.version
const versionArr = currentVersion.split(".")
const [mainVersion, subVersion, patchVersion] = versionArr

// ESM获取绝对路径
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const targetFile = path.resolve(__dirname, "../package.json")

// 发布的默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+patchVersion + 1}`

// 从命令行参数中取版本号
program.option("-v, --version <version>", "添加发布的版本号", defaultVersion)

program.parse(process.argv)
console.info(program.version)

const newVersion = program.version ? program.version : defaultVersion

function publish() {
    // shelljs.sed("-i", `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile) // 修改版本号
    // shelljs.exec("npm publish")
}

publish()
