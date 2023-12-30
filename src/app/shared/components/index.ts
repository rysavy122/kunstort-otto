import { Auth0FeatureComponent } from "./auth0-feature.component";
import { Auth0FeaturesComponent } from "./auth0-features.component";
import { CodeSnippetComponent } from "./code-snippet.component";
import { HomeComponent } from "./home.component";
import { NAVIGATION_COMPONENTS } from "./navigation";
import { PageFooterHyperlinkComponent } from "./page-footer-hyperlink.component";
import { PageFooterComponent } from "./page-footer.component";
import { PageLayoutComponent } from "./page-layout.component";
import { PageLoaderComponent } from "./page-loader.component";
import { ToastComponent } from "./toast/toast.component";
import { ConfirmationDialogComponent } from "./dialog/confirm-dialog.component";
import { CommentDialogComponent } from "./dialog/comment-dialog.component";


export const COMPONENTS = [
    ...NAVIGATION_COMPONENTS,
    Auth0FeatureComponent,
    Auth0FeaturesComponent,
    ToastComponent,
    ConfirmationDialogComponent,
    CommentDialogComponent,
    CodeSnippetComponent,
    HomeComponent,
    PageFooterHyperlinkComponent,
    PageFooterComponent,
    PageLayoutComponent,
    PageLoaderComponent
];
