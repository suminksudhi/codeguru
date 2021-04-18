// ES5 example
const { CodeGuruProfilerClient, AddNotificationChannelsCommand } = require("@aws-sdk/client-codeguruprofiler");

// a client can be shared by difference commands.
const client = new CodeGuruProfilerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AddNotificationChannelsCommand(params);

// async/await.
try {
    const data = await client.send(command);
// process data.
} catch (error) {
    console.log(error);
    // error handling.
} finally {
    // finally.
}