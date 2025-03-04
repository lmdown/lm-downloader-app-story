var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/envConfig.ts
var import_dotenv = __toESM(require("dotenv"));
var import_envalid = require("envalid");
import_dotenv.default.config();
var env = (0, import_envalid.cleanEnv)(process.env, {
  NODE_ENV: (0, import_envalid.str)({ devDefault: (0, import_envalid.testOnly)("test"), choices: ["development", "production", "test"] }),
  HOST: (0, import_envalid.host)({ devDefault: (0, import_envalid.testOnly)("localhost") }),
  PORT: (0, import_envalid.port)({ devDefault: (0, import_envalid.testOnly)(3e3) }),
  CORS_ORIGIN: (0, import_envalid.str)({ devDefault: (0, import_envalid.testOnly)("http://localhost:3000") }),
  COMMON_RATE_LIMIT_MAX_REQUESTS: (0, import_envalid.num)({ devDefault: (0, import_envalid.testOnly)(1e3) }),
  COMMON_RATE_LIMIT_WINDOW_MS: (0, import_envalid.num)({ devDefault: (0, import_envalid.testOnly)(1e3) })
});

// src/server.ts
var import_pino = __toESM(require("pino"));
var import_express7 = __toESM(require("express"));

// src/app-store/model/AIApp.ts
var import_sequelize2 = require("sequelize");

// src/util/PathUtil.ts
var import_path = require("path");

// src/util/ConfigPathUtil.ts
var path = __toESM(require("path"));
var import_fs = __toESM(require("fs"));

// src/template/base_config_template.ts
var DEFAULT_LMD_BASE_CONFIG = {
  // 配置，数据，AI应用，模型等所有文件的根目录
  LMD_DATA_ROOT: "${documents}/lmd_data_root",
  // 环境初始化的目录
  LMD_ENV_INIT_DIR: "${LMD_DATA_ROOT}/env-init",
  // 应用安装和管理脚本的目录
  LMD_SCRIPTS_DIR: "${LMD_DATA_ROOT}/scripts",
  // 应用安装的目录
  LMD_APPS_DIR: "${LMD_DATA_ROOT}/apps",
  LMD_LOCALE: ""
};

// src/util/ConfigPathUtil.ts
var ConfigPathUtil = class _ConfigPathUtil {
  static CONFIG_FILE_NAME = "lmd_base_config.env";
  static GLOBAL_ENV_FILE_NAME = "lmd_global_variables.env";
  static getRootDir() {
    const USER_HOME = process.env.HOME || process.env.USERPROFILE;
    const userDocumentsPath = path.join(USER_HOME, "Documents");
    if (!import_fs.default.existsSync(userDocumentsPath)) {
      throw new Error("Can't find Documents Dir in " + USER_HOME);
    }
    const tempConfig = DEFAULT_LMD_BASE_CONFIG;
    const rootDir = tempConfig.LMD_DATA_ROOT.replace("${documents}", userDocumentsPath);
    return { rootDir, tempConfig };
  }
  static getConfigFilePath() {
    const { rootDir } = _ConfigPathUtil.getRootDir();
    const configFilePath = path.join(rootDir, this.CONFIG_FILE_NAME);
    return configFilePath;
  }
  static getGlobalEnvFilePath() {
    const { rootDir } = _ConfigPathUtil.getRootDir();
    return path.join(rootDir, this.GLOBAL_ENV_FILE_NAME);
  }
};

// src/util/EnvUtil.ts
var import_fs2 = __toESM(require("fs"));
var dotenv2 = __toESM(require("dotenv"));
var EnvUtil = class {
  static convertToEnvFormat(env2) {
    const lines = [];
    for (const [key, value] of Object.entries(env2)) {
      let envValue = String(value);
      if (envValue === "") {
        continue;
      }
      if (/[=\s]/.test(envValue)) {
        envValue = `"${envValue}"`;
      }
      lines.push(`${key}=${envValue}`);
    }
    return lines.join("\n");
  }
  static getEnvFile(filePath) {
    const data = import_fs2.default.readFileSync(filePath, { encoding: "utf8", flag: "r" });
    return dotenv2.parse(data);
  }
};

// src/util/ConfigUtil.ts
var ConfigUtil = class {
  static getBaseConfig() {
    const configFilePath = ConfigPathUtil.getConfigFilePath();
    const config = EnvUtil.getEnvFile(configFilePath);
    return config;
  }
  static getGlobalEnv() {
    const envFilePath = ConfigPathUtil.getGlobalEnvFilePath();
    return EnvUtil.getEnvFile(envFilePath);
  }
};

// src/util/PathUtil.ts
var PathUtil = class {
  static getDBFilePath(fileName, dbDir) {
    const baseConfig = ConfigUtil.getBaseConfig();
    const lmdDataRoot = baseConfig.LMD_DATA_ROOT || process.cwd();
    if (dbDir.includes("${LMD_DATA_ROOT}")) {
      dbDir = dbDir.replace("${LMD_DATA_ROOT}", lmdDataRoot);
    }
    let dbFilePath = (0, import_path.join)(dbDir, fileName);
    dbFilePath = (0, import_path.resolve)(dbFilePath);
    return dbFilePath;
  }
  static getAppStoreDBPath(fileName) {
    const dbDir = process.env.APP_STORE_DB_DIR || "./db";
    return this.getDBFilePath(fileName, dbDir);
  }
  static getSelfManageDBPath(fileName) {
    const dbDir = process.env.SELF_MANAGE_DB_DIR || "./db";
    return this.getDBFilePath(fileName, dbDir);
  }
};

// src/app-store/db-app-store.ts
var import_sequelize = require("sequelize");
var dbPath = PathUtil.getAppStoreDBPath("app-store.db");
console.log("dbPath", dbPath);
var sequelize = new import_sequelize.Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: true,
  query: { raw: true }
});
var db_app_store_default = sequelize;

// src/app-store/model/AIApp.ts
var AIApp = class extends import_sequelize2.Model {
  id;
  name;
  installName;
  licenseInfo;
  runtimeUpdateAllowed;
  // 默认为1
  downloadInfo;
  refLinks;
  currentVersion;
  installLimit;
  // 安装限制，以JSON存储，主要包括操作系统，硬件CPU芯片，GPU芯片的限制
  icon;
  tags;
  snapshots;
  fileStorageTotalSize;
  accessInfo;
  createTime;
  updateTime;
};
AIApp.init(
  {
    id: {
      type: import_sequelize2.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: false
    },
    installName: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    licenseInfo: {
      type: import_sequelize2.DataTypes.TEXT,
      allowNull: true
    },
    runtimeUpdateAllowed: {
      type: import_sequelize2.DataTypes.BOOLEAN,
      allowNull: true
    },
    downloadInfo: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    refLinks: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    currentVersion: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    installLimit: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    icon: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    tags: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    snapshots: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    },
    fileStorageTotalSize: {
      type: import_sequelize2.DataTypes.NUMBER,
      allowNull: true
    },
    accessInfo: {
      type: import_sequelize2.DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize: db_app_store_default,
    tableName: "t_ai_app",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var AIApp_default = AIApp;

// src/app-store/model/AIAppDesc.ts
var import_sequelize3 = require("sequelize");
var AIAppDesc = class extends import_sequelize3.Model {
  id;
  appId;
  name;
  shortDesc;
  desc;
  locale;
  createTime;
  updateTime;
};
AIAppDesc.init(
  {
    id: {
      type: import_sequelize3.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    appId: {
      type: import_sequelize3.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    name: {
      type: import_sequelize3.DataTypes.STRING,
      allowNull: false
    },
    shortDesc: {
      type: import_sequelize3.DataTypes.TEXT,
      allowNull: true
    },
    desc: {
      type: import_sequelize3.DataTypes.TEXT,
      allowNull: true
    },
    locale: {
      type: import_sequelize3.DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize: db_app_store_default,
    tableName: "t_ai_app_desc",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var AIAppDesc_default = AIAppDesc;

// src/app-store/model/AIAppVersion.ts
var import_sequelize4 = require("sequelize");
var AIAppVersion = class extends import_sequelize4.Model {
  id;
  appId;
  version;
  icon;
  releaseTime;
  releaseNotes;
  locale;
  createTime;
  updateTime;
};
AIAppVersion.init(
  {
    id: {
      type: import_sequelize4.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    appId: {
      type: import_sequelize4.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    version: {
      type: import_sequelize4.DataTypes.STRING,
      allowNull: false
    },
    releaseTime: {
      type: import_sequelize4.DataTypes.DATE,
      allowNull: true
    },
    releaseNotes: {
      type: import_sequelize4.DataTypes.STRING,
      allowNull: true
    },
    locale: {
      type: import_sequelize4.DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize: db_app_store_default,
    tableName: "t_ai_app_version",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var AIAppVersion_default = AIAppVersion;

// src/app-store/model/AppStory.ts
var import_sequelize5 = require("sequelize");
var AppStory = class extends import_sequelize5.Model {
  id;
  title;
  slug;
  shortDesc;
  content;
  coverImageUrl;
  tags;
  relatedAppIds;
  published;
  locale;
  createTime;
  updateTime;
};
AppStory.init(
  {
    id: {
      type: import_sequelize5.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: import_sequelize5.DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: import_sequelize5.DataTypes.STRING,
      allowNull: false
    },
    shortDesc: {
      type: import_sequelize5.DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: import_sequelize5.DataTypes.TEXT,
      allowNull: false
    },
    coverImageUrl: {
      type: import_sequelize5.DataTypes.TEXT,
      allowNull: false
    },
    tags: {
      type: import_sequelize5.DataTypes.TEXT,
      allowNull: true
    },
    relatedAppIds: {
      type: import_sequelize5.DataTypes.TEXT,
      allowNull: true
    },
    published: {
      type: import_sequelize5.DataTypes.BOOLEAN,
      allowNull: true
    },
    locale: {
      type: import_sequelize5.DataTypes.STRING,
      allowNull: true
    },
    createTime: {
      type: import_sequelize5.DataTypes.DATE,
      allowNull: true
    },
    updateTime: {
      type: import_sequelize5.DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize: db_app_store_default,
    tableName: "t_app_story",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var AppStory_default = AppStory;

// src/app-store/model/index.ts
function initModels() {
  (async () => {
    try {
      await AIApp_default.sync();
      await AIAppVersion_default.sync();
      await AIAppDesc_default.sync();
      await AppStory_default.sync();
      console.log("[app-store] Database & tables created!");
    } catch (error) {
      console.error("Unable to sync the database:", error);
    }
  })();
}

// src/app-store/router/aiAppRouters.ts
var import_express = __toESM(require("express"));

// src/app-store/controller/aiAppController.ts
var getAllAIApps = async (req, res) => {
  const lang = req.query.lang;
  try {
    let query = {};
    if (lang) {
      query = { language: lang };
    }
    const records = await AIApp_default.findAll({ where: query });
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
var getAIApp = async (req, res) => {
  const lang = req.query.lang;
  try {
    let query = {};
    if (lang) {
      query = {
        id: req.params.id,
        language: lang
      };
    }
    const record = await AIApp_default.findOne({ where: query });
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
var createAIApp = async (req, res) => {
  const reqData = req.body;
  try {
    const record = await AIApp_default.create(reqData);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var updateAIApp = async (req, res) => {
  const id = req.params.id;
  const { name, description, price, language } = req.body;
  try {
    const [affectedRows] = await AIApp_default.update(
      { name, description, price, language },
      { where: { id: parseInt(id, 10) } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.updated" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var deleteAIApp = async (req, res) => {
  const id = req.params.id;
  try {
    const affectedRows = await AIApp_default.destroy({ where: { id: parseInt(id, 10) } });
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.deleted" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};

// src/app-store/router/aiAppRouters.ts
var router = import_express.default.Router();
router.get("/", getAllAIApps);
router.get("/:id", getAIApp);
router.post("/", createAIApp);
router.put("/:id", updateAIApp);
router.delete("/:id", deleteAIApp);
var aiAppRouters_default = router;

// src/app-store/router/aiAppInfoRouters.ts
var import_express2 = __toESM(require("express"));

// src/app-store/service/aiAppInfoService.ts
var AIAppInfoService = class {
  async getPageList(req) {
    const query = req.query;
    const locale = query.locale;
    const appQuery = this.buildAppQuery(query);
    const page = query.page || 1;
    const limit = query.limit || 10;
    const offset = (page - 1) * limit;
    const { count, rows } = await AIApp_default.findAndCountAll({
      limit,
      offset,
      order: [
        ["update_time", "DESC"],
        ["id", "DESC"]
      ],
      raw: true,
      where: appQuery
    });
    let resultAppInfoList;
    const resultAppIds = rows.map((aiApp) => {
      return aiApp.id;
    });
    let baseQuery = {};
    if (locale) {
      baseQuery = { locale };
    }
    const queryWithAppId = Object.assign({ appId: resultAppIds }, baseQuery);
    const aiAppDescRecords = await AIAppDesc_default.findAll({
      raw: true,
      where: queryWithAppId
    });
    resultAppInfoList = rows.map((aiApp) => {
      const appId = aiApp.id;
      const descItem = aiAppDescRecords.find((desc) => desc.appId === appId);
      let aiAppDTO = {};
      const downloadInfo = aiApp.downloadInfo;
      aiApp.downloadInfo = void 0;
      aiAppDTO = Object.assign(aiAppDTO, aiApp);
      this.fillDescData(aiAppDTO, descItem);
      if (aiApp.installLimit) {
        this.fillInstallLimit(aiAppDTO, aiApp);
      }
      if (downloadInfo) {
        aiAppDTO.downloadInfo = JSON.parse(downloadInfo);
      }
      if (aiApp.tags) {
        aiAppDTO.tags = aiApp.tags.split(",");
      }
      return aiAppDTO;
    });
    return {
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
      data: resultAppInfoList
    };
  }
  buildAppQuery(query) {
    const appQuery = {};
    if (query.ids) {
      const appIds = query.ids;
      const idArr = appIds.split(",");
      appQuery.id = idArr;
    }
    return appQuery;
  }
  fillDownloadInfo(aiApp) {
    try {
      if (aiApp.downloadInfo && typeof aiApp.downloadInfo === "string") {
        aiApp.downloadInfo = JSON.parse(aiApp.downloadInfo);
      }
    } catch (err) {
      console.error(err);
    }
  }
  fillLicenseInfo(aiApp) {
    try {
      if (aiApp.licenseInfo && typeof aiApp.licenseInfo === "string") {
        aiApp.licenseInfo = JSON.parse(aiApp.licenseInfo);
      }
    } catch (err) {
      console.error(err);
    }
  }
  fillRefLinks(aiApp) {
    try {
      if (aiApp.refLinks && typeof aiApp.refLinks === "string") {
        aiApp.refLinks = JSON.parse(aiApp.refLinks);
      }
    } catch (err) {
      console.error(err);
    }
  }
  fillSnapshots(aiApp) {
    try {
      if (aiApp.snapshots && typeof aiApp.snapshots === "string") {
        aiApp.snapshots = aiApp.snapshots.split(",");
      }
    } catch (err) {
      console.error(err);
    }
  }
  fillDescData(aiAppDTO, descItem) {
    if (descItem) {
      aiAppDTO.name = descItem.name;
      if (descItem.desc) {
        aiAppDTO.desc = descItem.desc;
      }
      if (descItem.shortDesc) {
        aiAppDTO.shortDesc = descItem.shortDesc;
      }
    }
  }
  fillInstallLimit(aiAppDTO, aiApp) {
    if (!aiApp) {
      return;
    }
    const installLimitStr = aiApp.installLimit;
    if (installLimitStr) {
      const installLimit = JSON.parse(installLimitStr);
      aiAppDTO.installLimit = installLimit;
    }
  }
  async getAppLatestVersion(queryWithAppId) {
    const versionRecord = await AIAppVersion_default.findOne({
      limit: 1,
      order: [
        ["id", "DESC"],
        ["create_time", "DESC"]
      ],
      raw: true,
      where: queryWithAppId
    });
    return versionRecord;
  }
  async getAIAppInfo(req) {
    const id = req.params.id;
    const locale = req.query.locale;
    const aiApp = await AIApp_default.findOne({ raw: true, where: { id } });
    if (!aiApp) {
      return {};
    }
    let aiAppInfoDTO;
    aiAppInfoDTO = Object.assign({}, aiApp);
    if (aiApp.tags) {
      aiAppInfoDTO.tags = aiApp.tags.split(",");
    }
    const queryConditions = { where: { locale, appId: id } };
    const aiAppDesc = await AIAppDesc_default.findOne(queryConditions);
    this.fillDescData(aiAppInfoDTO, aiAppDesc);
    this.fillInstallLimit(aiAppInfoDTO, aiApp);
    this.fillAccessInfo(aiAppInfoDTO);
    this.fillDownloadInfo(aiAppInfoDTO);
    this.fillLicenseInfo(aiAppInfoDTO);
    this.fillRefLinks(aiAppInfoDTO);
    this.fillSnapshots(aiAppInfoDTO);
    return aiAppInfoDTO;
  }
  // Only return base info
  async getAIAppBaseInfoById(id) {
    const aiApp = await AIApp_default.findOne({ raw: true, where: { id } });
    if (!aiApp) {
      return {};
    }
    let aiAppInfoDTO;
    aiAppInfoDTO = Object.assign({}, aiApp);
    const queryConditions = { where: { appId: id } };
    const aiAppDesc = await AIAppDesc_default.findOne(queryConditions);
    this.fillDownloadInfo(aiAppInfoDTO);
    return aiAppInfoDTO;
  }
  async getAIAppIcon(appId) {
    const aiApp = await AIApp_default.findOne({
      raw: true,
      where: { id: appId },
      attributes: ["id", "icon"]
    });
    if (!aiApp) {
      return "";
    }
    return aiApp.icon;
  }
  fillAccessInfo(aiApp) {
    try {
      if (aiApp.accessInfo && typeof aiApp.accessInfo === "string") {
        const accessInfo = JSON.parse(aiApp.accessInfo);
        aiApp.accessInfo = accessInfo;
      }
    } catch (err) {
      console.error(err);
    }
  }
};

// src/app-store/controller/aiAppInfoController.ts
var service = new AIAppInfoService();
var getAIAppInfoList = async (req, res) => {
  try {
    const resultAppInfoList = await service.getPageList(req);
    res.json(resultAppInfoList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
var getAIAppInfo = async (req, res) => {
  const lang = req.query.lang;
  try {
    const record = await service.getAIAppInfo(req);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
var createAIAppInfo = async (req, res) => {
  const reqData = req.body;
  try {
    const record = await AIApp_default.create(reqData);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var updateAIAppInfo = async (req, res) => {
  const id = req.params.id;
  const reqData = req.body;
  try {
    const [affectedRows] = await AIApp_default.update(
      reqData,
      { where: { id: parseInt(id, 10) } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.updated" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var deleteAIAppInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const affectedRows = await AIApp_default.destroy({ where: { id: parseInt(id, 10) } });
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.deleted" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};

// src/app-store/router/aiAppInfoRouters.ts
var router2 = import_express2.default.Router();
router2.get("/", getAIAppInfoList);
router2.get("/:id", getAIAppInfo);
router2.post("/", createAIAppInfo);
router2.put("/:id", updateAIAppInfo);
router2.delete("/:id", deleteAIAppInfo);
var aiAppInfoRouters_default = router2;

// src/app-store/router/AppStoryRouters.ts
var import_express3 = __toESM(require("express"));

// src/app-store/service/AppStoryService.ts
var AppStoryService = class {
  async getAppStory(id, locale = "en") {
    const record = await AppStory_default.findOne({ raw: true, where: { id, locale } });
    if (!record) {
      return null;
    }
    let result;
    result = Object.assign({}, record);
    if (record.tags) {
      result.tags = record.tags.split(",");
    }
    if (record.relatedAppIds) {
      result.relatedAppIds = record.relatedAppIds.split(",");
    }
    return result;
  }
};

// src/app-store/controller/AppStoryController.ts
var service2 = new AppStoryService();
var getAppStory = async (req, res) => {
  const { id } = req.params;
  const { locale } = req.query;
  const result = await service2.getAppStory(id, locale);
  res.json(result);
};

// src/app-store/router/AppStoryRouters.ts
var router3 = import_express3.default.Router();
router3.get("/:id", getAppStory);
var AppStoryRouters_default = router3;

// src/app-store/router/HomeBannerRouters.ts
var import_express4 = __toESM(require("express"));

// src/app-store/service/HomeBannerService.ts
var HomeBannerService = class {
  async getBanners(locale = "en") {
    const records = await AppStory_default.findAll({ raw: true, where: { locale } });
    if (!records) {
      return null;
    }
    let resultList = records.map((item) => {
      const banner = {};
      banner.id = String(item.id);
      banner.title = item.title;
      banner.shortDesc = item.shortDesc;
      banner.coverImageUrl = item.coverImageUrl;
      banner.createTime = item.createTime;
      banner.updateTime = item.updateTime;
      return banner;
    });
    return resultList;
  }
};

// src/app-store/controller/HomeBannerController.ts
var service3 = new HomeBannerService();
var getHomeBanners = async (req, res) => {
  const { locale } = req.query;
  const result = await service3.getBanners(locale);
  res.json(result);
};

// src/app-store/router/HomeBannerRouters.ts
var router4 = import_express4.default.Router();
router4.get("/", getHomeBanners);
var HomeBannerRouters_default = router4;

// src/app-store/router/index.ts
function initRouters(app2) {
  app2.use("/api/app-store/ai-app", aiAppRouters_default);
  app2.use("/api/app-store/ai-app-info", aiAppInfoRouters_default);
  app2.use("/api/app-store/app-story", AppStoryRouters_default);
  app2.use("/api/app-store/home-banner", HomeBannerRouters_default);
}

// src/app-store/index.ts
function initAppStoreModule(app2) {
  initModels();
  initRouters(app2);
}

// src/self-manage/model/FileStorageInfo.ts
var import_sequelize7 = require("sequelize");

// src/self-manage/db-self-manage.ts
var import_sequelize6 = require("sequelize");
var dbPath2 = PathUtil.getSelfManageDBPath("self-manage.db");
var sequelize2 = new import_sequelize6.Sequelize({
  dialect: "sqlite",
  storage: dbPath2,
  logging: true,
  query: { raw: true }
});
var db_self_manage_default = sequelize2;

// src/self-manage/model/FileStorageInfo.ts
var FileStorageInfo = class extends import_sequelize7.Model {
  id;
  installedInstanceId;
  type;
  icon;
  location;
  size;
  deviceType;
  storageMediaType;
};
FileStorageInfo.init(
  {
    id: {
      type: import_sequelize7.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    installedInstanceId: {
      type: import_sequelize7.DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type: {
      type: import_sequelize7.DataTypes.STRING,
      allowNull: false
    },
    icon: {
      type: import_sequelize7.DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: import_sequelize7.DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: import_sequelize7.DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    deviceType: {
      type: import_sequelize7.DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    storageMediaType: {
      type: import_sequelize7.DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  },
  {
    sequelize: db_self_manage_default,
    tableName: "t_file_storage_info",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var FileStorageInfo_default = FileStorageInfo;

// src/self-manage/model/InstalledInstance.ts
var import_sequelize8 = require("sequelize");
var InstalledInstance = class extends import_sequelize8.Model {
  id;
  appId;
  // App的名称，如果是能查到App信息的，会标出来正常的名字。当然显示给用户时，会被desc表中的name替换掉
  // 如果查不到，就用应用的文件名本身
  name;
  version;
  // default 使用LMD安装脚本执行后安装的， import 是从本机路径导入的
  installMethod;
  installName;
  fileStorageTotalSize;
  totalSizeCalcTime;
  createTime;
  updateTime;
};
InstalledInstance.init(
  {
    id: {
      type: import_sequelize8.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    appId: {
      type: import_sequelize8.DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    name: {
      type: import_sequelize8.DataTypes.STRING,
      allowNull: false
    },
    version: {
      type: import_sequelize8.DataTypes.TEXT,
      allowNull: true
    },
    installMethod: {
      type: import_sequelize8.DataTypes.TEXT,
      allowNull: true
    },
    installName: {
      type: import_sequelize8.DataTypes.TEXT,
      allowNull: true
    },
    fileStorageTotalSize: {
      type: import_sequelize8.DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    totalSizeCalcTime: {
      type: import_sequelize8.DataTypes.DATE,
      allowNull: true
    },
    createTime: {
      type: import_sequelize8.DataTypes.DATE,
      allowNull: true
    },
    updateTime: {
      type: import_sequelize8.DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize: db_self_manage_default,
    tableName: "t_installed_instance",
    timestamps: true,
    createdAt: "create_time",
    updatedAt: "update_time",
    underscored: true
  }
);
var InstalledInstance_default = InstalledInstance;

// src/self-manage/model/index.ts
function initModels2() {
  (async () => {
    try {
      await FileStorageInfo_default.sync();
      await InstalledInstance_default.sync();
      console.log("[self-manage] Database & tables created!");
    } catch (error) {
      console.error("Unable to sync the database:", error);
    }
  })();
}

// src/self-manage/router/InstalledInstanceRouters.ts
var import_express5 = __toESM(require("express"));

// src/self-manage/service/FileStorageInfoService.ts
var FileStorageInfoService = class {
  async getStorageInfoByInstanceId(installedInstanceId) {
    const records = await FileStorageInfo_default.findAll({
      raw: true,
      where: {
        installedInstanceId
      }
    });
    return records;
  }
};

// src/util/CheckDesktopAppUtil.ts
var import_path2 = __toESM(require("path"));
var import_fs3 = __toESM(require("fs"));

// src/util/SystemCheckUtil.ts
var import_os = __toESM(require("os"));
var SystemCheckUtil = class {
  static isMacOS() {
    const platform = import_os.default.platform();
    return platform === "darwin";
  }
  static isWindows() {
    const platform = import_os.default.platform();
    return platform === "win32";
  }
};

// src/util/ReplaceUtil.ts
var ReplaceUtil = class {
  static replaceVars(config, rootVariable, rootValue) {
    for (let tempKey in config) {
      if (tempKey !== "LMD_DATA_ROOT") {
        config[tempKey] = config[tempKey].replace(rootVariable, rootValue);
      }
    }
  }
};

// src/util/app-running/AppScriptRepoUtil.ts
var AppScriptRepoUtil = class {
  static getLMDScriptRepoUrl(lmAppData) {
    let repoUrl = "https://gitee.com/lmdown/lmd-install-scripts";
    if (lmAppData?.downloadInfo && lmAppData?.downloadInfo.length > 0) {
      const downloadInfo = lmAppData.downloadInfo[0];
      repoUrl = downloadInfo.scriptGitRepoUrl;
    }
    const repoLocalFolderName = this.getLastPathSegment(repoUrl) || "lmd-install-scripts";
    return {
      repoUrl,
      repoLocalFolderName
    };
  }
  static getLastPathSegment(url) {
    const match = url.match(/[^\/?#]+(?=[/?#]*$)/);
    return match ? match[0] : null;
  }
};

// src/util/CheckDesktopAppUtil.ts
var import_child_process = require("child_process");
var import_os2 = __toESM(require("os"));
var CheckVersionUtil = class {
  // the Dir name of App Install Script Repository
  static async getLMDAppScriptRepoDir(appId) {
    const svr = new AIAppInfoService();
    let appBaseInfo;
    if (appId) {
      appBaseInfo = await svr.getAIAppBaseInfoById(appId);
    }
    const { repoLocalFolderName } = AppScriptRepoUtil.getLMDScriptRepoUrl(appBaseInfo);
    return repoLocalFolderName;
  }
  static async checkVersionByName(appInstallName, appId = "") {
    const config = ConfigUtil.getBaseConfig();
    const appScriptRepoDir = await this.getLMDAppScriptRepoDir(String(appId));
    const appScriptPath = import_path2.default.join(config.LMD_SCRIPTS_DIR, `${appScriptRepoDir}/apps`, appInstallName);
    const appInstallEnvPath = import_path2.default.join(appScriptPath, "env");
    let envData = {};
    if (import_fs3.default.existsSync(appScriptPath)) {
      try {
        envData = EnvUtil.getEnvFile(appInstallEnvPath);
        ReplaceUtil.replaceVars(envData, "${LMD_APPS_DIR}", config.LMD_APPS_DIR);
      } catch (err) {
        console.error("read app env error ", err);
      }
    }
    let version = "--";
    let realVersionInfo;
    let appInstallPath;
    let appFullPath;
    let fileName;
    if (SystemCheckUtil.isMacOS()) {
      appInstallPath = envData._MAC_INSTALL_PATH;
      fileName = envData._MAC_INSTALL_TARGET_FILE_NAME || envData._MAC_INSTALLER_FILE_NAME;
    } else if (SystemCheckUtil.isWindows()) {
      appInstallPath = envData._WINDOWS_INSTALL_PATH;
    }
    if (fileName) {
      appFullPath = import_path2.default.join(appInstallPath, fileName);
    }
    if (envData._VERSION_DETECTABLE !== "0" && (appInstallPath || appFullPath)) {
      try {
        const versionDetectType = envData._VERSION_DETECT_TYPE;
        if (versionDetectType) {
          version = await this.checkVersionByProjFiles(appInstallPath, appFullPath, versionDetectType);
        } else {
          version = await this.checkVersion(appFullPath);
        }
      } catch (err) {
        console.error(err);
      }
    }
    realVersionInfo = {
      version,
      appInstallPath,
      appFullPath
    };
    return realVersionInfo;
  }
  static async checkVersionByProjFiles(appInstallPath, appFullPath, versionDetectType) {
    let version;
    if (versionDetectType === "node.js") {
      try {
        const packageJsonPath = import_path2.default.resolve(appInstallPath, "package.json");
        const data = import_fs3.default.readFileSync(packageJsonPath, "utf8");
        const packageJson = JSON.parse(data);
        console.log(`Project version: ${packageJson.version}`);
        version = packageJson.version;
      } catch (err) {
        console.error("Error reading or parsing package.json:", err);
      }
    } else if (versionDetectType === "python") {
      version = this.getPythonProjectVersion(import_path2.default.resolve(appInstallPath, "pyproject.toml"));
    }
    return version;
  }
  static async checkVersion(appFullFilePath) {
    let appPath = appFullFilePath;
    let version;
    const fs6 = require("fs");
    if (!fs6.existsSync(appPath)) {
      console.error(`\u9519\u8BEF: \u5E94\u7528\u7A0B\u5E8F ${appPath} \u4E0D\u5B58\u5728.`);
    }
    const platform = import_os2.default.platform();
    return new Promise((resolve2, reject) => {
      if (platform === "darwin") {
        const defaultsCommand = `defaults read "${appPath}/Contents/Info" CFBundleShortVersionString`;
        (0, import_child_process.exec)(defaultsCommand, (error, stdout, stderr) => {
          if (error) {
            console.error(`Check Ver Error: ${stderr}`);
            const mdlsCommand = `mdls -raw -name kMDItemVersion "${appPath}"`;
            (0, import_child_process.exec)(mdlsCommand, (mdlsError, mdlsStdout, mdlsStderr) => {
              if (mdlsError) {
                reject(`Check Ver Error ${appPath} ${mdlsStderr}`);
              } else if (mdlsStdout.trim()) {
                version = mdlsStdout.trim();
                resolve2(version);
              } else {
                reject(`Check Ver Error ${appPath}`);
              }
            });
          } else if (stdout.trim()) {
            version = stdout.trim();
            resolve2(stdout.trim());
            console.log(`version: ${version}`);
          } else {
            console.error(`Check Ver Error ${appPath}`);
          }
        });
      } else if (platform === "win32") {
        const powershellCommand = `Get-ItemProperty -Path Registry::"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*" | Where-Object {$_.DisplayName -like "*YourAppName*"} | Select-Object DisplayName, DisplayVersion`;
        (0, import_child_process.exec)(`powershell -NoProfile -ExecutionPolicy Bypass -Command "${powershellCommand}"`, (error, stdout, stderr) => {
          if (error) {
            reject(`Check Ver Error: ${stderr} ${error}`);
            return;
          }
          if (stdout.trim()) {
            resolve2(stdout.trim());
          } else {
            console.error("Check Ver Error");
          }
        });
      } else {
        (0, import_child_process.exec)(`${appPath} --version`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Check Ver Error: ${stderr}`);
            return;
          }
          if (stdout.trim()) {
            resolve2(stdout.trim());
          } else {
            reject(`Check Ver Error ${appPath} `);
          }
        });
      }
    });
  }
  static getPythonProjectVersion(filePath) {
    try {
      const content = import_fs3.default.readFileSync(filePath, "utf-8");
      const versionMatch = content.match(/version\s*=\s*(["']?)([^"'\s]+)\1/);
      if (versionMatch && versionMatch[2]) {
        return versionMatch[2];
      }
    } catch (err) {
      console.log("getPythonProjectVersion err ", err);
    }
    return null;
  }
};

// src/self-manage/service/InstalledInstanceService.ts
var InstalledInstanceService = class {
  fileStorageSrv = new FileStorageInfoService();
  appInfoSvr = new AIAppInfoService();
  async getInstalledInstanceList() {
    const instances = await InstalledInstance_default.findAll({
      order: [
        ["update_time", "DESC"],
        ["id", "DESC"]
      ],
      raw: true,
      where: {},
      attributes: { exclude: ["create_time", "update_time"] }
    });
    const installedInstanceDTOList = [];
    for (let item of instances) {
      const dto = Object.assign({}, item);
      const appIcon = await this.appInfoSvr.getAIAppIcon(String(item.appId));
      dto.appIcon = appIcon;
      const fileStorageInfoDTOList = await this.getStorageInfoByInstanceId(item.id);
      dto.fileStorageInfoList = fileStorageInfoDTOList;
      await this.fillRealVersion(dto, item);
      installedInstanceDTOList.push(dto);
    }
    return installedInstanceDTOList;
  }
  /**
   * 获取某个应用安装的实例
   * @param appId 应用ID
   * @returns
   */
  async getInstalledInstanceForApp(appId) {
    const instances = await InstalledInstance_default.findAll({
      raw: true,
      where: { appId },
      attributes: { exclude: ["create_time", "update_time"] }
    });
    const installedInstanceDTOList = [];
    for (let item of instances) {
      const dto = Object.assign({}, item);
      const fileStorageInfoDTOList = await this.getStorageInfoByInstanceId(item.id);
      dto.fileStorageInfoList = fileStorageInfoDTOList;
      installedInstanceDTOList.push(dto);
      try {
        await this.fillRealVersion(dto, item);
      } catch (err) {
        console.error(err);
        dto.version = "--";
      }
    }
    return installedInstanceDTOList;
  }
  // async getInstalledInstance(installedInstanceId: string | number) {
  //   const record = await InstalledInstance.findOne({ raw: true, where: {installedInstanceId} });
  //   let dto: installedInstanceDTO = {} as installedInstanceDTO
  //   dto = Object.assign(dto, record)
  //   const fileStorageInfoDTOList = await this.getStorageInfoByInstanceId()
  //   dto.fileStorageInfoList = fileStorageInfoDTOList
  //   return dto;
  // }
  async getStorageInfoByInstanceId(installedInstanceId) {
    const sList = await this.fileStorageSrv.getStorageInfoByInstanceId(installedInstanceId);
    const fileStorageInfoDTOList = sList.map((storageInfo) => {
      const fileStorageInfoDTO = Object.assign({}, storageInfo);
      return fileStorageInfoDTO;
    });
    return fileStorageInfoDTOList;
  }
  async getInstalledInstance(id) {
    const query = {
      // 安装实例ID
      id
    };
    const record = await InstalledInstance_default.findOne({ raw: true, where: query });
    let dto = {};
    dto = Object.assign(dto, record);
    const sList = await this.fileStorageSrv.getStorageInfoByInstanceId(id);
    const fileStorageInfoDTOList = sList.map((storageInfo) => {
      const fileStorageInfoDTO = Object.assign({}, storageInfo);
      return fileStorageInfoDTO;
    });
    dto.fileStorageInfoList = fileStorageInfoDTOList;
    await this.fillRealVersion(dto, record);
    return dto;
  }
  async fillRealVersion(dto, instance) {
    const realVersionInfo = await CheckVersionUtil.checkVersionByName(instance.installName, instance.appId) || {};
    dto.version = realVersionInfo.version;
    dto.appFullPath = realVersionInfo.appFullPath;
    dto.appInstallPath = realVersionInfo.appInstallPath;
    return realVersionInfo.version;
  }
  async createInstanceByApp(app2, installType = "default") {
    const installInstance = {};
    installInstance.appId = Number(app2.id);
    installInstance.name = app2.name;
    installInstance.version = app2.currentVersion;
    installInstance.installMethod = installType;
    installInstance.installName = app2.installName;
    return await InstalledInstance_default.create(installInstance);
  }
};

// src/self-manage/controller/InstalledInstanceController.ts
var service4 = new InstalledInstanceService();
var getInstalledInstanceList = async (req, res) => {
  const result = await service4.getInstalledInstanceList();
  res.json(result);
};
var getInstalledInstanceForApp = async (req, res) => {
  const appId = req.params.appId;
  const result = await service4.getInstalledInstanceForApp(appId);
  res.json(result);
};
var getInstalledInstanceForRunning = async (req, res) => {
  const result = await service4.getInstalledInstance(req.params.id);
  res.json(result);
};
var createInstalledInstanceByApp = async (req, res) => {
  const appDTO = req.body;
  const installType = req.params.installType;
  try {
    const instances = await service4.getInstalledInstanceForApp(appDTO.id);
    if (instances && instances.length > 0) {
      res.status(200).json({
        msg: "install instance exist"
      });
    }
    const newRecord = await service4.createInstanceByApp(appDTO, installType);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: "errors.create" });
  }
};
var createInstalledInstance = async (req, res) => {
  const reqData = req.body;
  try {
    const record = await InstalledInstance_default.create(reqData);
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "errors.create" });
  }
};
var updateInstalledInstance = async (req, res) => {
  const id = req.params.id;
  const reqData = req.body;
  try {
    const [affectedRows] = await InstalledInstance_default.update(
      reqData,
      { where: { id: parseInt(id, 10) } }
    );
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.updated" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var deleteInstalledInstance = async (req, res) => {
  const id = req.params.id;
  try {
    const affectedRows = await InstalledInstance_default.destroy({ where: { id: parseInt(id, 10) } });
    if (affectedRows === 0) {
      return res.status(404).json({ error: "errors.notFound" });
    }
    res.status(200).json({ message: "success.deleted" });
  } catch (error) {
    res.status(500).json({ error: "errors.database" });
  }
};
var checkVersion = async (req, res) => {
  const installName = req.params.installName;
  const version = await CheckVersionUtil.checkVersionByName(installName);
  res.json(version);
};

// src/self-manage/router/InstalledInstanceRouters.ts
var router5 = import_express5.default.Router();
router5.get("/", getInstalledInstanceList);
router5.get("/app/:appId", getInstalledInstanceForApp);
router5.get("/:id", getInstalledInstanceForRunning);
router5.post("/", createInstalledInstance);
router5.post("/app/:appId", createInstalledInstanceByApp);
router5.post("/app/:appId/type/:installType", createInstalledInstanceByApp);
router5.put("/:id", updateInstalledInstance);
router5.delete("/:id", deleteInstalledInstance);
router5.get("/check-version/:installName", checkVersion);
var InstalledInstanceRouters_default = router5;

// src/self-manage/router/CommonUtilRouters.ts
var import_express6 = __toESM(require("express"));
var import_path5 = __toESM(require("path"));

// src/util/SystemInfoUtil.ts
var import_os3 = __toESM(require("os"));
var import_child_process3 = require("child_process");

// src/util/SystemCommandUtil.ts
var import_child_process2 = require("child_process");
var SystemCommandUtil = class {
  static runCommand(command) {
    if (command) {
      try {
        const stdout = (0, import_child_process2.execSync)(command);
        let result = stdout.toString();
        if (result) {
          result = result.trim();
        }
        console.log("runCommand -- cmd:", command);
        console.log("runCommand -- result", result);
        return result;
      } catch (error) {
        console.error("runCommand err", error);
        return "";
      }
    }
  }
};

// src/util/SystemInfoUtil.ts
var SystemInfoUtil = class {
  static getIPv4Addresses() {
    const interfaces = import_os3.default.networkInterfaces();
    const addresses = [];
    for (const interfaceName in interfaces) {
      const iface = interfaces[interfaceName];
      for (const alias of iface) {
        if (alias.family === "IPv4" && alias.address !== "127.0.0.1") {
          addresses.push(alias.address);
        }
      }
    }
    return addresses;
  }
  static getSingleLanIP() {
    const ipv4Addresses = this.getIPv4Addresses();
    let resultIP = "";
    console.log("IP Addresses:", ipv4Addresses);
    if (ipv4Addresses && ipv4Addresses.length > 0) {
      resultIP = ipv4Addresses[0];
    }
    return resultIP;
  }
  static getOSEnv(key) {
    let command = "";
    if (SystemCheckUtil.isMacOS()) {
      command = `launchctl getenv ${key}`;
    } else if (SystemCheckUtil.isWindows()) {
      return process.env[key];
    }
    if (command) {
      return SystemCommandUtil.runCommand(command);
    }
  }
  static setOSEnv(key, value) {
    let command = "";
    if (value === "") {
      value = '""';
    }
    if (SystemCheckUtil.isMacOS()) {
      command = `launchctl setenv ${key} ${value}`;
    } else if (SystemCheckUtil.isWindows()) {
      command = `setx ${key} ${value}`;
    }
    console.log("setOSEnv command", command);
    if (command) {
      try {
        const stdout = (0, import_child_process3.execSync)(command);
        const result = stdout.toString();
        console.log("set env", key, result);
        process.env[key] = value;
        return result;
      } catch (error) {
        console.error("setOSEnv err", error);
        throw error;
      }
    }
  }
};

// src/util/FileInfoUtil.ts
var import_fs4 = __toESM(require("fs"));
var import_path3 = __toESM(require("path"));
var FileInfoUtil = class {
  static getDirSize(dirPath) {
    let totalSize = 0;
    if (!import_fs4.default.existsSync(dirPath)) {
      console.error("dir dose not exist.", dirPath);
      return totalSize;
    }
    const files = import_fs4.default.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = import_path3.default.join(dirPath, file);
      const stats = import_fs4.default.statSync(filePath);
      if (stats.isDirectory()) {
        totalSize += this.getDirSize(filePath);
      } else {
        totalSize += stats.size;
      }
    });
    return totalSize;
  }
};

// src/util/app-running/OllamaAPIUtil.ts
var http = __toESM(require("http"));
var OllamaAPIUtil = class {
  static async getInstalledModels() {
    const maxRetries = 3;
    const retryDelay = 500;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      console.log(`try get model list: ${attempt}`);
      try {
        return await this.makeRequest();
      } catch (error) {
        if (attempt === maxRetries) {
          console.error("request error, all failed. ", error);
        }
        console.warn(`request error: ${error.message}`);
        await this.delay(retryDelay);
      }
    }
  }
  static makeRequest() {
    return new Promise((resolve2, reject) => {
      const options = {
        hostname: "127.0.0.1",
        port: 11434,
        // path: '/api/models',
        path: "/api/tags",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      const req = http.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode === 200) {
            try {
              const responseJson = JSON.parse(data);
              const models = responseJson.models;
              models.forEach((model, index) => {
                console.log(`${index + 1}. ${model.name}`);
              });
              resolve2(models);
            } catch (error) {
              reject(new Error(`parse json error: ${error.message}`));
            }
          } else {
            reject(new Error(`request failed: ${res.statusCode} ${res.statusMessage}`));
          }
        });
      });
      req.on("error", (error) => {
        reject(new Error(`req error: ${error.message}`));
      });
      req.end();
    });
  }
  static delay(ms) {
    return new Promise((resolve2) => setTimeout(resolve2, ms));
  }
};

// src/util/app-running/AppModelsUtil.ts
var { execSync: execSync3 } = require("child_process");
var AppModelsUtil = class {
  static async getAllModels(appInstallName) {
    if (appInstallName === "ollama") {
      return await this.getOllamaAllModelsHttpAPI();
    }
    return [];
  }
  static async getOllamaAllModelsHttpAPI() {
    return await OllamaAPIUtil.getInstalledModels();
  }
  static getOllamaAllModels() {
    const command = `ollama list`;
    let output = "";
    try {
      const stdout = execSync3(command);
      output = stdout.toString();
    } catch (error) {
      console.error("run ollama list error", error);
      return [];
    }
    const lines = output.split("\n");
    const dataArray = [];
    const findColumnPosition = (headerLine2, columnName) => {
      const index = headerLine2.indexOf(columnName);
      if (index === -1) {
        throw new Error(`Column '${columnName}' not found in header.`);
      }
      let end = headerLine2.length;
      for (let i = index + columnName.length; i < headerLine2.length; i++) {
        if (headerLine2[i] !== " ") {
          end = i;
          break;
        }
      }
      return { start: index, end };
    };
    const headerLine = lines[0];
    const nameColumnPosition = findColumnPosition(headerLine, "NAME");
    const sizeColumnPosition = findColumnPosition(headerLine, "SIZE");
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      const nameValue = line.substring(nameColumnPosition.start, nameColumnPosition.end).trim();
      const sizeValue = line.substring(sizeColumnPosition.start, sizeColumnPosition.end).trim();
      if (nameValue) {
        dataArray.push({ name: nameValue, size: sizeValue });
      }
    }
    return dataArray;
  }
};

// src/self-manage/router/CommonUtilRouters.ts
var import_os4 = __toESM(require("os"));

// src/util/DirInfoUtil.ts
var import_child_process4 = require("child_process");
var import_fs5 = __toESM(require("fs"));
var import_path4 = __toESM(require("path"));
var DirInfoUtil = class {
  static getDirInfo(targetDir) {
    if (!import_fs5.default.existsSync(targetDir)) {
      console.error("dir dose not exist", targetDir);
      return null;
    }
    const dirStat = import_fs5.default.statSync(targetDir);
    if (!dirStat.isDirectory()) {
      console.error("not a dir ", targetDir);
      return null;
    }
    const dirSize = FileInfoUtil.getDirSize(targetDir);
    const diskInfo = this.getDiskInfo(targetDir, dirStat);
    const dirInfo = {};
    dirInfo.dirPath = targetDir;
    dirInfo.diskName = diskInfo.diskName;
    dirInfo.dirSize = dirSize;
    dirInfo.freeSpace = diskInfo.freeSpace;
    dirInfo.totalSpace = diskInfo.totalSpace;
    return dirInfo;
  }
  static getDiskName(dirStat) {
    const deviceId = dirStat.dev;
    const dfOutput = (0, import_child_process4.execSync)("df -k").toString();
    const lines = dfOutput.split("\n");
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const parts = line.split(/\s+/);
        const devicePath = parts[0];
        const mountPoint = parts[8];
        try {
          const mountStats = import_fs5.default.statSync(mountPoint);
          if (mountStats.dev === deviceId) {
            const cmd = `diskutil info "${devicePath}" | grep "Volume Name" | awk -F': ' '{print $2}'`;
            console.log(cmd);
            const diskName = (0, import_child_process4.execSync)(cmd).toString().trim();
            console.log("diskName", diskName);
            return diskName;
          }
        } catch (error) {
          console.error(`Error getting stats for ${mountPoint}:`, error.message);
        }
      }
    }
  }
  static getDiskInfo(targetDir, dirStat) {
    let platform = process.platform;
    let diskInfo = {};
    if (platform === "darwin") {
      try {
        const volumeNameMatch = this.getDiskName(dirStat);
        const volumeName = volumeNameMatch ? volumeNameMatch.trim() : "Disk";
        const dfHumanOutput = (0, import_child_process4.execSync)(`df -k "${targetDir}"`).toString();
        const humanLines = dfHumanOutput.split("\n");
        const humanDiskLine = humanLines[1];
        const humanParts = humanDiskLine.trim().split(/\s+/);
        const totalSpace = Number(humanParts[1]) * 1024;
        const freeSpace = Number(humanParts[3]) * 1024;
        diskInfo = {
          diskName: volumeName,
          totalSpace,
          freeSpace
        };
      } catch (error) {
        console.error("check disn info error:", error.message);
      }
    } else if (platform === "win32") {
      try {
        const driveLetter = import_path4.default.parse(targetDir).root;
        const wmicOutput = (0, import_child_process4.execSync)(
          `wmic logicaldisk where "DeviceID='${driveLetter.replace("\\", "")}'" get Size,FreeSpace /value`
        ).toString();
        const lines = wmicOutput.split("\n").filter((line) => line.trim() !== "");
        const sizeLine = lines.find((line) => line.startsWith("Size="));
        const freeSpaceLine = lines.find((line) => line.startsWith("FreeSpace="));
        const totalSpaceBytes = parseInt(sizeLine.split("=")[1], 10);
        const freeSpaceBytes = parseInt(freeSpaceLine.split("=")[1], 10);
        diskInfo = {
          diskName: driveLetter,
          totalSpace: totalSpaceBytes,
          freeSpace: freeSpaceBytes
        };
      } catch (error) {
        console.error("check disk info err:", error.message);
      }
    } else {
      console.error("dose not support this OS");
    }
    return diskInfo;
  }
};

// src/self-manage/router/CommonUtilRouters.ts
var router6 = import_express6.default.Router();
router6.post("/path-join", (req, res) => {
  const paths = req.body.paths;
  let resultPath = "";
  if (paths) {
    resultPath = import_path5.default.join(...paths);
  }
  res.json({
    resultPath
  });
});
router6.get("/lan-ip", (req, res) => {
  let lanIPs = SystemInfoUtil.getIPv4Addresses();
  res.json({
    ip: lanIPs
  });
});
router6.get("/user-home-dir", (req, res) => {
  const userHomeDir = import_os4.default.homedir();
  res.json({
    userHomeDir
  });
});
router6.get("/installed-model-files/:appInstallName", async (req, res) => {
  const appInstallName = req.params.appInstallName;
  const models = await AppModelsUtil.getAllModels(appInstallName);
  res.json({
    models: models || []
  });
});
router6.get("/dir-file-size", (req, res) => {
  const dirPath = String(req.query.dirPath);
  const fileSize = FileInfoUtil.getDirSize(dirPath);
  res.json({
    dirPath,
    fileSize
  });
});
router6.get("/dir-and-disk-info", (req, res) => {
  const dirPath = String(req.query.dirPath);
  const dirInfo = DirInfoUtil.getDirInfo(dirPath) || {};
  res.json(dirInfo);
});
router6.post("/app-running-base-env-info", (req, res) => {
  const keys = req.body.keys;
  const resultObj = {};
  keys.forEach((key) => {
    resultObj[key] = SystemInfoUtil.getOSEnv(key) || "";
  });
  res.json(resultObj);
});
router6.post("/save-app-running-base-env-info", (req, res) => {
  const envObj = req.body.envObj;
  console.log("save env ", envObj);
  for (const key in envObj) {
    const value = envObj[key];
    console.log("save key value", key, value);
    SystemInfoUtil.setOSEnv(key, value);
  }
  res.json({
    msg: "env saved"
  });
});
var CommonUtilRouters_default = router6;

// src/self-manage/router/index.ts
function initRouters2(app2) {
  app2.use("/api/self-manage/installed-instance", InstalledInstanceRouters_default);
  app2.use("/api/self-manage/common-util", CommonUtilRouters_default);
}

// src/self-manage/index.ts
function initSelfManageModule(app2) {
  initModels2();
  initRouters2(app2);
}

// src/headers.ts
function headers(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("X-Powered-By", "lm-downloader");
  res.header("Content-Type", "application/json");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT,POST,PATCH");
  res.header(
    "Content-Security-Policy",
    "default-src 'self'; base-uri: 'self'; strict-dynamic 'self'; manifest-src 'self'; script-src 'self'; style-src 'self'"
  );
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
}

// src/server.ts
var http2 = require("http");
var logger = (0, import_pino.default)({ name: "server start" });
var app = (0, import_express7.default)();
http2.createServer(app);
app.use(import_express7.default.json());
app.use(headers);
initAppStoreModule(app);
initSelfManageModule(app);
app.get("/api/health-check", (req, res) => {
  res.send({ msg: "lmd server ok" });
});
var cors = require("cors");
app.use(cors({
  origin: "http://localhost"
}));
app.use(function(req, res) {
  res.send("404 not found.");
});

// src/self-manage/websockets/WSServer.ts
var import_ws = require("ws");

// src/util/ShellExecUtil.ts
var import_path6 = __toESM(require("path"));
var ShellExecUtil = class {
  static getExecPath() {
    if (SystemCheckUtil.isWindows()) {
      const globalEnv = ConfigUtil.getGlobalEnv();
      const bashPath = import_path6.default.join(globalEnv.GIT_INSTALL_PATH, "bin/bash.exe");
      return bashPath;
    } else {
      return "bash";
    }
  }
};

// src/util/CopyValueUtil.ts
var CopyValueUtil = class {
  static copySomeEnvVarsWindows() {
    const envVars = [
      "ALLUSERSPROFILE",
      "APPDATA",
      "CommonProgramFiles",
      "CommonProgramFiles(x86)",
      "CommonProgramW6432",
      "COMMON_RATE_LIMIT_MAX_REQUESTS",
      "COMMON_RATE_LIMIT_WINDOW_MS",
      "COMPUTERNAME",
      "ComSpec",
      "HOME",
      "HOMEDRIVE",
      "HOMEPATH",
      "HOST",
      "NUMBER_OF_PROCESSORS",
      "OneDrive",
      "ORIGINAL_XDG_CURRENT_DESKTOP",
      "OS",
      "Path",
      "PROCESSOR_ARCHITECTURE",
      "PROCESSOR_IDENTIFIER",
      "PROCESSOR_LEVEL",
      "PROCESSOR_REVISION",
      "ProgramData",
      "ProgramFiles",
      "ProgramFiles(x86)",
      "ProgramW6432",
      "PROMPT",
      "PSModulePath",
      "PUBLIC",
      "SESSIONNAME",
      "SystemDrive",
      "SystemRoot",
      "TEMP",
      "TERM_PROGRAM",
      "TERM_PROGRAM_VERSION",
      "TMP",
      "USERDOMAIN",
      "USERDOMAIN_ROAMINGPROFILE",
      "USERNAME",
      "USERPROFILE",
      "windir"
    ];
    return this.copySpecificKeys(process.env, envVars);
  }
  static copyOllamaEnvVars() {
    const allEnv = process.env;
    const envVars = [];
    for (const envKey in allEnv) {
      if (envKey.startsWith("OLLAMA")) {
        envVars.push(envKey);
      }
    }
    return this.copySpecificKeys(process.env, envVars);
  }
  static copySpecificKeys(source, keysToCopy) {
    let target = {};
    keysToCopy.forEach((key) => {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    });
    return target;
  }
};

// src/self-manage/websockets/WSServer.ts
var pty = require("node-pty");
var os5 = require("os");
var shell = ShellExecUtil.getExecPath();
var WSServer = class {
  wss;
  expressApp;
  // private terminals: Map<number, any> = new Map()
  constructor(app2, server) {
    this.wss = new import_ws.WebSocketServer({ server });
    this.expressApp = app2;
    this.setupEventHandlers();
  }
  getFullEnvForApp() {
    const processEnv = process.env;
    let fullEnv = {};
    if (SystemCheckUtil.isWindows()) {
      fullEnv = CopyValueUtil.copySomeEnvVarsWindows();
    } else {
      fullEnv = {
        HOME: processEnv.HOME,
        PATH: processEnv.PATH
      };
    }
    fullEnv = Object.assign(fullEnv, CopyValueUtil.copyOllamaEnvVars());
    const baseConfig = ConfigUtil.getBaseConfig();
    const globalEnv = ConfigUtil.getGlobalEnv();
    fullEnv = Object.assign(fullEnv, baseConfig);
    fullEnv = Object.assign(fullEnv, globalEnv);
    return fullEnv;
  }
  setupEventHandlers() {
    this.wss.on("connection", (ws) => {
      const fullEnv = this.getFullEnvForApp();
      const ptyProcess = pty.spawn(shell, [], {
        name: "lmd-xterm",
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: fullEnv
      });
      ws.on("message", (res) => {
        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(res);
        if (typeof text === "string") {
          const clientMsg = text;
          if (clientMsg.startsWith("lmd_action:resize:")) {
            const colsAndRowsStr = clientMsg.replace("lmd_action:resize:", "");
            const colsAndRowsArr = colsAndRowsStr.split(",");
            const cols = parseInt(colsAndRowsArr[0]);
            const rows = parseInt(colsAndRowsArr[1]);
            console.log("resize terminal ", cols, rows);
            ptyProcess.resize(cols, rows);
            return;
          }
        }
        ptyProcess.write(res);
      });
      ws.on("error", (err) => {
        console.log("ws got error ", err);
      });
      ws.on("close", (ws2, code, reason) => {
        console.log("ws close ", code, reason);
        ptyProcess.kill();
      });
      ptyProcess.on("data", (data) => {
        process.stdout.write(data);
        this.sendToWSClient(ws, data, ptyProcess);
      });
      ptyProcess.on("close", (code, reason) => {
        console.log("ws got close \u5B50\u8FDB\u7A0B\u9000\u51FA", code, reason);
      });
    });
  }
  sendToWSClient(ws, data, ptyProcess) {
    try {
      ws.send(data);
    } catch (error) {
      console.log("\u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u5931\u8D25", error);
      ptyProcess.kill();
    }
  }
  broadcast(message) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  }
  start() {
    console.log("WebSocket server is running");
  }
};
var WSServer_default = WSServer;

// src/index.ts
var LMDServer = class {
  // _port: number;
  // constructor(port: number) {
  // }
  start() {
    const server = app.listen(env.PORT, () => {
      const { NODE_ENV, HOST, PORT } = env;
      logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
    });
    const wsServer = new WSServer_default(app, server);
    wsServer.start();
    const onCloseSignal = () => {
      logger.info("sigint received, shutting down");
      server.close(() => {
        logger.info("server closed");
        process.exit();
      });
      setTimeout(() => process.exit(1), 1e4).unref();
    };
    process.on("SIGINT", onCloseSignal);
    process.on("SIGTERM", onCloseSignal);
  }
};

// src/start.ts
new LMDServer().start();
