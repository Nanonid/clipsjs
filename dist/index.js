"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module = require("./clips");
class CLIPSF {
    constructor() {
        this.CreateEnvironment = Module.cwrap('CreateEnvironment', 'number', []);
        this.malloc = Module.cwrap('malloc', 'number', ['number']);
        this.EnvEval = Module.cwrap('EnvEval', 'number', ['number', 'string', 'number']);
        this.EnvClear = Module.cwrap('EnvClear', 'number', ['number']);
        this.GetDataType = Module.cwrap('GetDataType', 'string', ['number']);
        this.SetEvaluationError = Module.cwrap('SetEvaluationError', 'number', ['number', 'number']);
        this.SetHaltExecution = Module.cwrap('SetHaltExecution', 'number', ['number', 'number']);
    }
}
exports.CLIPSF = CLIPSF;
class CLIPS {
    constructor() {
        this.env = CLIPS.F.CreateEnvironment();
        this.ds = CLIPS.F.malloc(CLIPS.BUFF);
        this.buffer = [];
    }
    recover() {
        CLIPS.F.SetEvaluationError(this.env, 0);
        CLIPS.F.SetHaltExecution(this.env, 0);
    }
    clear() {
        CLIPS.F.EnvClear(this.env);
    }
    eval(clips) {
        this.buffer = [];
        let res = CLIPS.F.EnvEval(this.env, clips, this.ds);
        console.log("ds type:", CLIPS.F.GetDataType(this.ds));
        return this.buffer;
    }
}
CLIPS.BUFF = 1024;
CLIPS.F = new CLIPSF();
exports.CLIPS = CLIPS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VyaWNsaW5kYWhsL3NyYy9TY2l1bW8vY2xpcHNqcy9saWIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUFrQztBQVVsQztJQUFBO1FBQ0ksc0JBQWlCLEdBQXVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLFdBQU0sR0FBWSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEYsYUFBUSxHQUFjLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckUsZ0JBQVcsR0FBaUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5RSx1QkFBa0IsR0FBd0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1RyxxQkFBZ0IsR0FBc0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0NBQUE7QUFSRCx3QkFRQztBQUVEO0lBU0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELEtBQUs7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksQ0FBRSxLQUFhO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7O0FBM0JNLFVBQUksR0FBRyxJQUFJLENBQUM7QUFDWixPQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUg1QixzQkE4QkMifQ==