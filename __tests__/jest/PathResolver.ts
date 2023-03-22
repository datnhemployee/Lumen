const toReport = (pathToReportFile: string) =>
  `./__tests__/reports/${pathToReportFile}`;

const toRegexSuit = (regexToSuitFile: string) =>
  `**/__tests__/suit/${regexToSuitFile}`;

const PathResolver = {
  toReport,
  toRegexSuit,
};

export default PathResolver;
