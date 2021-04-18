// ES5 example
const { CodeGuruReviewerClient, AssociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer");

// a client can be shared by difference commands.
const client = new CodeGuruReviewerClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateRepositoryCommand(params);

// async/await.
try {
    const data = await client.send(command);
    // process data.
  } catch (error) {
    // error handling.
  } finally {
    // finally.
  }