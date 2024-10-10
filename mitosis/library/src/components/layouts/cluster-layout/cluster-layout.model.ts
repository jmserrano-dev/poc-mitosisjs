const ClusterLayoutWarpList = ["wrap", "nowrap"] as const;
const ClusterLayoutJustify = ["start", "center", "end", "space-around", "space-between"] as const;

export type ClusterLayoutProps = {
  wrap?: (typeof ClusterLayoutWarpList)[number];
  justify?: (typeof ClusterLayoutJustify)[number];
  nativeClass?: string;
  spacing?: number;
  children?: any;
};
