import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFilesServiceUpload {
  files: FileUpload[];
}

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);
    const waitedFiles = [];
    // const aaa = await file;
    waitedFiles[0] = await files[0];
    waitedFiles[1] = await files[1];

    console.log(waitedFiles);
    // waitedFiles.push(aaa);
    // console.log(aaa);

    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: 'zinc-anvil-377405',
      keyFilename: 'zinc-anvil-377405-fe46516d9122.json',
    }).bucket('codecamp-storage3');

    // 1-2) 스토리지에 파일 올리기
    console.time('시간을 확인해보자!!');
    const results = [];
    for (let i = 0; i < waitedFiles.length; i++) {
      results[i] = await new Promise<string>((resolve, reject) =>
        waitedFiles[i]
          .createReadStream()
          .pipe(storage.file(waitedFiles[i].filename).createWriteStream())
          .on('finish', () => resolve('성공'))
          .on('error', () => reject('실패')),
      );
    }
    console.timeEnd('시간을 확인해보자!!');

    // console.log('파일 전송이 완료되었습니다.');

    return results;
  }
}
