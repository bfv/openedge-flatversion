const core = require('@actions/core');

try {
  const version = core.getInput('version');
  const parts = version.split('.');
  if (parts.length < 2) {
    throw new Error('Invalid version format');
  }
  const flatVersion = parts[0] + parts[1];
  console.log(`flat-version: ${version} --> ${flatVersion}`);
  core.setOutput('flat-version', flatVersion);

  const releaseVersion = parts[0] + "." + parts[1];
  console.log(`release-version: ${version} --> ${releaseVersion}`);
  core.setOutput('release-version', releaseVersion);

  const baseVersion = parts[0] + "." + parts[1] + ".0";
  console.log(`base-version: ${version} --> ${baseVersion}`);
  core.setOutput('base-version', baseVersion);

}
catch (error) {
  core.setFailed(error.message);
}
