import { Resource } from "sst";

export default {
  async fetch(req: Request) {
    Resource.MyValue.x;
  },
};
