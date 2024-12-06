export const throwError = ({ message, check, res, status }) => {
  if (check ?? true) {
    res.status(status ?? 500).send({
      message: message ?? "Internal server error",
    });
  }
};

export const throwNotFound = ({ entity, check, res }) => {
  if (check ?? true) {
    res.status(404).send({
      message: `${entity} Not found`,
    });
  }
};
