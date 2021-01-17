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

    async create(ctx: Router.RouterContext) {
        try {
            const created = await this.model.create(ctx.request.body);
            ctx.body = await this.model.getCollection(created[0]);
            ctx.status = 201;
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

    async update(ctx: Router.RouterContext) {
        try {
            const updated = await this.model.update(ctx.params.id, ctx.request.body);
            if (!updated) throw new Error('Not Modified');
            ctx.body = await this.model.getCollection(ctx.params.id);
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

    async delete(ctx: Router.RouterContext) {
        try {
            ctx.body = await this.model.delete(ctx.params.id);
            if (!ctx.body) ctx.status = 404;
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }

}