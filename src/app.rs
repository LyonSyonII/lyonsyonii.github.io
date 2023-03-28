#![allow(non_snake_case)]
use dioxus::prelude::*;

pub fn App(cx: Scope) -> Element {
    let rsx = rsx! {
        "Hello world!"
    };

    cx.render(rsx)
}

