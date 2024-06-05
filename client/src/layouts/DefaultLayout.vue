<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
import MainContainer from '@/components/marketing/MainContainer.vue';
import Header from '@/components/layout/Header.vue';
import { links } from '@/utils/consts';
import { cn } from '@/lib/utils';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ref } from 'vue';
import AccountProvider from '@/components/menu/AccountProvider.vue';
import { Separator } from '@/components/ui/separator';

const isCollapsed = ref(false);

function onCollapse() {
  isCollapsed.value = true;
}

function onExpand() {
  isCollapsed.value = false;
}
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup id="resize-panel-group-1" direction="horizontal" class="flex h-dvh w-full">
      <ResizablePanel
        id="resize-panel-1"
        :default-size="14"
        :collapsed-size="3"
        :min-size="10"
        :max-size="14"
        collapsible
        :class="cn(isCollapsed && 'min-w-[40px] transition-all duration-300 ease-in-out')"
        @expand="onExpand"
        @collapse="onCollapse"
      >
        <Sidebar :is-collapsed="isCollapsed" :links="links" />
      </ResizablePanel>
      <ResizableHandle id="resize-handle-1" with-handle />
      <ResizablePanel id="resize-panel-2" :default-size="0" :min-size="30">
        <div class="h-dvh">
          <Header />
          <div class="flex h-full w-full justify-between">
            <slot />
            <MainContainer />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
