import { Entity } from "entities/entity.abstract";

export abstract class Controller {

    private _model: Entity;

    constructor(model: Entity) {
        this._model = model;
    }

    get model(): any {
        return this._model;
    }

}