import { Entity } from "entities/entity.abstract";

import Router from "../router";

import { Controller } from "./controller.abstract";

export abstract class CRUDController extends Controller {

    async getAll(ctx: Router.RouterContext) {
        try {
            ctx.body = await this.model.getCollection();
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

    async getById(ctx: Router.RouterContext) {
        try {
            ctx.body = await this.model.getCollection(ctx.params.id);
            if (!ctx.body.length) ctx.status = 404;
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}