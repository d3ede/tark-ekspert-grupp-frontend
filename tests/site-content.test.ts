import {describe,expect,it} from "vitest";
import {content} from "@/lib/site-content";

describe("replacement content",()=>{it("keeps ET primary and RU complete",()=>{expect(content.et.langName).toBe("ET");expect(content.ru.langName).toBe("RU");expect(content.et.services).toHaveLength(5);expect(content.ru.services).toHaveLength(5)});it("uses the legacy form contract",()=>{expect(content.et.endpoint).toBe("https://tarkekspertgrupp.ee/send.php");expect(content.et.gallery).toHaveLength(25)})});
