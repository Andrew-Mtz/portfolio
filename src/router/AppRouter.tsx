import { Route, Routes } from "react-router";
import { Main } from "../pages/Main";
import NotFound from "../pages/NotFound";
import Soon from "../pages/Soon";

const AppRouter = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path="resume" element={<Soon />} />
    <Route path="simplified-ui" element={<Soon />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
