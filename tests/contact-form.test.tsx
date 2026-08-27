import {act,render,screen} from "@testing-library/react";
import {afterEach,describe,expect,it,vi} from "vitest";
import {ContactForm} from "@/components/contact-form";
import {content} from "@/lib/site-content";

describe("contact form captcha",()=>{
  afterEach(()=>{vi.useRealTimers();vi.restoreAllMocks()});

  it("creates a fresh challenge and keeps the legacy fields in sync",()=>{
    vi.useFakeTimers();
    vi.spyOn(Math,"random").mockReturnValueOnce(0).mockReturnValueOnce(0.999);
    const {container}=render(<ContactForm copy={content.et}/>);

    act(()=>vi.runAllTimers());

    expect(screen.getByText("1 + 9 = ?")).toBeInTheDocument();
    expect(container.querySelector<HTMLInputElement>('input[name="captcha_a"]')).toHaveValue("1");
    expect(container.querySelector<HTMLInputElement>('input[name="captcha_b"]')).toHaveValue("9");
  });
});
