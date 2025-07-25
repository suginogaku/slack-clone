export class User {
  id!: string;
  name!: string;
  email!: string;
  thumbnailUrl?: string;

  constructor (data: User) {
    // コンストラクタから渡ってきたデータを基にUserクラスのインスタンスを作成
    Object.assign(this, data)
  }
}