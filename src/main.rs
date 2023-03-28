#![allow(non_snake_case)]
use dioxus::prelude::*;

mod app;
use app::App;

fn main() {
    dioxus_web::launch(Root);
}

fn Root(cx: Scope) -> Element {
    let rsx = rsx!(
        App {}
    );

    cx.render(rsx)
}
