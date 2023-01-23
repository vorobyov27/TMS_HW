import log4js from "log4js";

const baseLogsPath = './logs/';

log4js.configure({
  appenders: { 
    commonLog: { type: "file", filename: baseLogsPath + "common.log", flags: 'w' },

    debugAppender: { type: "file", filename: baseLogsPath + "debug.log" },
    debugOnly: {type: 'logLevelFilter', appender: 'debugAppender', level: 'debug'},

    infoAppender: { type: "file", filename: baseLogsPath + "info.log" },
    infoOnly: {type: 'logLevelFilter', appender: 'infoAppender', level: 'info'},

    warnAppender: { type: "file", filename: baseLogsPath + "warn.log" },
    warnOnly: {type: 'logLevelFilter', appender: 'warnAppender', level: 'warn'},

    errorAppender: { type: "file", filename: baseLogsPath + "error.log" },
    errorOnly: {type: 'logLevelFilter', appender: 'errorAppender', level: 'error'},

    fatalAppender: { type: "file", filename: baseLogsPath + "fatal.log" },
    fatalOnly: {type: 'logLevelFilter', appender: 'fatalAppender', level: 'fatal'},

    console: {type: "console"}
},
  categories: { 
    default: { 
      appenders: ["commonLog","debugOnly","infoOnly","warnOnly","errorOnly","fatalOnly","console"], 
      level: "trace" },
 },
});

export const logger = log4js.getLogger();