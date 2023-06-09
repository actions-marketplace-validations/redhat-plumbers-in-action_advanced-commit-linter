export class Commit {
    constructor(metadata) {
        this.metadata = metadata;
        this.validation = {
            status: 'failure',
            message: '',
            tracker: undefined,
            upstream: undefined,
        };
    }
    async validate(validator) {
        this.validation = await validator.validateCommit(this.metadata);
        return this;
    }
    get validated() {
        return Object.assign(Object.assign({}, this.metadata), { validation: this.validation });
    }
    haveTracker() {
        return this.validation.upstream !== undefined;
    }
    haveUpstream() {
        return this.validation.upstream !== undefined;
    }
}
//# sourceMappingURL=commit.js.map