"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToFileBuffer(str) {
    // If we're in Node...
    if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
        const buf = Buffer.from(str);
        const ab = new ArrayBuffer(buf.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            view[i] = buf[i];
        }
        return ab;
    }
    else if (typeof TextEncoder !== 'undefined') {
        // Modern browsers implement TextEncode.
        return new TextEncoder('utf-8').encode(str).buffer;
    }
    else {
        // Slowest method but sure to be compatible with every platform.
        const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        const bufView = new Uint16Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
}
exports.stringToFileBuffer = stringToFileBuffer;
function fileBufferToString(fileBuffer) {
    if (fileBuffer.toString.length == 1) {
        return fileBuffer.toString('utf-8');
    }
    else if (typeof Buffer !== 'undefined') {
        return new Buffer(fileBuffer).toString('utf-8');
    }
    else if (typeof TextDecoder !== 'undefined') {
        // Modern browsers implement TextEncode.
        return new TextDecoder('utf-8').decode(new Uint8Array(fileBuffer));
    }
    else {
        // Slowest method but sure to be compatible with every platform.
        const bufView = new Uint8Array(fileBuffer);
        const bufLength = bufView.length;
        let result = '';
        let chunkLength = Math.pow(2, 16) - 1;
        // We have to chunk it because String.fromCharCode.apply will throw
        // `Maximum call stack size exceeded` on big inputs.
        for (let i = 0; i < bufLength; i += chunkLength) {
            if (i + chunkLength > bufLength) {
                chunkLength = bufLength - i;
            }
            result += String.fromCharCode.apply(null, bufView.subarray(i, i + chunkLength));
        }
        return result;
    }
}
exports.fileBufferToString = fileBufferToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy92aXJ0dWFsLWZzL2hvc3QvYnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBcUJBLDRCQUFtQyxHQUFXO0lBQzVDLHNCQUFzQjtJQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5Qyx3Q0FBd0M7UUFDeEMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFxQixDQUFDO0lBQ3BFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLGdFQUFnRTtRQUNoRSxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQXhCRCxnREF3QkM7QUFFRCw0QkFBbUMsVUFBc0I7SUFDdkQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUUsVUFBVSxDQUFDLFFBQW9DLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlDLHdDQUF3QztRQUN4QyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sZ0VBQWdFO1FBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QyxtRUFBbUU7UUFDbkUsb0RBQW9EO1FBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLFdBQVcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBMUJELGdEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEZpbGVCdWZmZXIgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmRlY2xhcmUgY29uc3QgVGV4dEVuY29kZXI6IHtcbiAgbmV3IChlbmNvZGluZzogc3RyaW5nKToge1xuICAgIGVuY29kZShzdHI6IHN0cmluZyk6IFVpbnQ4QXJyYXk7XG4gIH07XG59O1xuXG5kZWNsYXJlIGNvbnN0IFRleHREZWNvZGVyOiB7XG4gIG5ldyhlbmNvZGluZzogc3RyaW5nKToge1xuICAgIGRlY29kZShieXRlczogVWludDhBcnJheSk6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0ZpbGVCdWZmZXIoc3RyOiBzdHJpbmcpOiBGaWxlQnVmZmVyIHtcbiAgLy8gSWYgd2UncmUgaW4gTm9kZS4uLlxuICBpZiAodHlwZW9mIEJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEJ1ZmZlci5mcm9tID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgYnVmID0gQnVmZmVyLmZyb20oc3RyKTtcbiAgICBjb25zdCBhYiA9IG5ldyBBcnJheUJ1ZmZlcihidWYubGVuZ3RoKTtcbiAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgKytpKSB7XG4gICAgICB2aWV3W2ldID0gYnVmW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhYjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgVGV4dEVuY29kZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBUZXh0RW5jb2RlLlxuICAgIHJldHVybiBuZXcgVGV4dEVuY29kZXIoJ3V0Zi04JykuZW5jb2RlKHN0cikuYnVmZmVyIGFzIEFycmF5QnVmZmVyO1xuICB9IGVsc2Uge1xuICAgIC8vIFNsb3dlc3QgbWV0aG9kIGJ1dCBzdXJlIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBldmVyeSBwbGF0Zm9ybS5cbiAgICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoc3RyLmxlbmd0aCAqIDIpOyAvLyAyIGJ5dGVzIGZvciBlYWNoIGNoYXJcbiAgICBjb25zdCBidWZWaWV3ID0gbmV3IFVpbnQxNkFycmF5KGJ1Zik7XG4gICAgZm9yIChsZXQgaSA9IDAsIHN0ckxlbiA9IHN0ci5sZW5ndGg7IGkgPCBzdHJMZW47IGkrKykge1xuICAgICAgYnVmVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVCdWZmZXJUb1N0cmluZyhmaWxlQnVmZmVyOiBGaWxlQnVmZmVyKTogc3RyaW5nIHtcbiAgaWYgKGZpbGVCdWZmZXIudG9TdHJpbmcubGVuZ3RoID09IDEpIHtcbiAgICByZXR1cm4gKGZpbGVCdWZmZXIudG9TdHJpbmcgYXMgKGVuYzogc3RyaW5nKSA9PiBzdHJpbmcpKCd1dGYtOCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoZmlsZUJ1ZmZlcikudG9TdHJpbmcoJ3V0Zi04Jyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFRleHREZWNvZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIE1vZGVybiBicm93c2VycyBpbXBsZW1lbnQgVGV4dEVuY29kZS5cbiAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpLmRlY29kZShuZXcgVWludDhBcnJheShmaWxlQnVmZmVyKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU2xvd2VzdCBtZXRob2QgYnV0IHN1cmUgdG8gYmUgY29tcGF0aWJsZSB3aXRoIGV2ZXJ5IHBsYXRmb3JtLlxuICAgIGNvbnN0IGJ1ZlZpZXcgPSBuZXcgVWludDhBcnJheShmaWxlQnVmZmVyKTtcbiAgICBjb25zdCBidWZMZW5ndGggPSBidWZWaWV3Lmxlbmd0aDtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbGV0IGNodW5rTGVuZ3RoID0gTWF0aC5wb3coMiwgMTYpIC0gMTtcblxuICAgIC8vIFdlIGhhdmUgdG8gY2h1bmsgaXQgYmVjYXVzZSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5IHdpbGwgdGhyb3dcbiAgICAvLyBgTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRgIG9uIGJpZyBpbnB1dHMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZMZW5ndGg7IGkgKz0gY2h1bmtMZW5ndGgpIHtcbiAgICAgIGlmIChpICsgY2h1bmtMZW5ndGggPiBidWZMZW5ndGgpIHtcbiAgICAgICAgY2h1bmtMZW5ndGggPSBidWZMZW5ndGggLSBpO1xuICAgICAgfVxuICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgYnVmVmlldy5zdWJhcnJheShpLCBpICsgY2h1bmtMZW5ndGgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=