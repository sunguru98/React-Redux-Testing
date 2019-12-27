type Payload = number | string | boolean | object

export interface ReduxAction {
  type: string
  payload?: Payload
}

export interface Post {
  title: string,
  body: string
}

export interface ReduxStore {
  posts: Post[]
}
