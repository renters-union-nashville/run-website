import { SnapshotFrom, assign, setup } from "xstate";
import { createActorContext } from "@xstate/react";

type Context = {};

export const machine = setup({
    types: {
        context: {} as Context,
        events: {} as
            | { type: "back" },
    },
    actions: {
        goToHomePage: () => { },
        goToEventsPage: () => { },
    },
    schemas: {
        events: {
            back: {
                type: "object",
                properties: {},
            },
        },
    },
}).createMachine({
    context: {},
    id: "New Machine",
    initial: "home",
    states: {
        home: {
            initial: "waiting",
            states: {
                waiting: {},
                error: {},
            },
        },
        events: {
            initial: "waiting",
            states: {
                waiting: {}
            }
        }
    },
});

export const AppContext = createActorContext(machine);

export type AppState = SnapshotFrom<typeof machine>;
export type AppSelector<T> = (state: AppState) => T;

export const useSelector = AppContext.useSelector;
export const useSend = () => AppContext.useActorRef().send;

export default machine;