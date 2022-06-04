import { Footer, Header, Layout } from "@components/common";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/ld/Build/LaserDefender.loader.js",
  dataUrl: "/ld/Build/LaserDefender.data",
  frameworkUrl: "/ld/Build/LaserDefender.framework.js",
  codeUrl: "/ld/Build/LaserDefender.wasm",
});

export default function LaserDefender(): JSX.Element {
  return (
    <div>
      <div className="flex justify-center">
        <Unity
          unityContext={unityContext}
          style={{
            width: "342px",
            height: "608px",
          }}
        />
      </div>
    </div>
  );
}

LaserDefender.Layout = Layout;
