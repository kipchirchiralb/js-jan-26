const age = 0 ? 40 : 60;

console.log(age);
// 0 - falsy --- 0, "" -0 ,

// ? -- falsy  values
//  ?? -- null or undefined values

// callback functions

// Config merger
function buildConfig(userConfig) {
  const defaults = { theme: "light", retries: 3 };

  // Use user values or defaults
  const config = {
    theme: userConfig.theme ?? defaults.theme,
    retries: userConfig.retries ?? defaults.retries,
  };
  return config;
}

const result = buildConfig({ theme: "dark" });

console.log(result);

// callback function
