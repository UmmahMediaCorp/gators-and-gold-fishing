import { Route, Switch } from "wouter";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import Home from "@/pages/Home";
import OpenWater from "@/pages/OpenWater";
import IceFishing from "@/pages/IceFishing";
import Guide from "@/pages/Guide";
import Gallery from "@/pages/Gallery";
import Book from "@/pages/Book";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/open-water" component={OpenWater} />
        <Route path="/ice-fishing" component={IceFishing} />
        <Route path="/your-guide" component={Guide} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/book" component={Book} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
