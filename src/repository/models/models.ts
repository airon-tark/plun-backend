export type AzureProfile = {
  id: string;
  displayName: string;
  emailAddress: string;
};

export type User = {
  id: string;
  azureProfileId: string;
  email: string;
  name: string;
  organizations?: Array<string>;
};

export type Organization = {
  id: string;
  azureId: string;
  name: string;
  projects?: Array<string>;
};

export type Project = {
  id: string;
  azureId: string;
  name: string;
};

export type Task = {
  id: string;
  name: string;
  azureId?: number;
  azureState?: TaskState;
  azureUrl?: string;
};

export type Plan = {
  id: string,
  entries: Array<PlanEntry>,
  date: string,
}

export type PlanEntry = {
  taskId: string,
  taskState: TaskState,
  // external field, used to return in API
  task?: Task,
}

export type AzureAuthResponse = {
  accessToken: string,
  tokenType: string,
  expiresIn: number,
  refreshToken: string,
}

export type TaskState = 'created' | 'done' | 'progress' | 'failed' | 'cancelled'


